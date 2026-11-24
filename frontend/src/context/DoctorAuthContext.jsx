import React, { createContext, useContext, useState, useEffect } from 'react';

const DoctorAuthContext = createContext(null);

const TOKEN_KEY = 'naira_chief_doctor_token';
const DOCTOR_KEY = 'naira_chief_doctor_profile';
const REMEMBER_EMAIL_KEY = 'naira_chief_doctor_remembered_email';

export function DoctorAuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || null;
  });

  const [doctor, setDoctor] = useState(() => {
    const raw = localStorage.getItem(DOCTOR_KEY) || sessionStorage.getItem(DOCTOR_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);

  // Remembered email for quick login
  const [rememberedEmail, setRememberedEmail] = useState(() => {
    return localStorage.getItem(REMEMBER_EMAIL_KEY) || '';
  });

  /**
   * Real Authentication Call to Chief Doctor CRM API Endpoint
   * Configurable via VITE_CRM_API_URL environment variable
   */
  const login = async (email, password, rememberMe = false) => {
    setLoading(true);

    const apiUrl = import.meta.env.VITE_CRM_API_URL || '/api/doctor/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
          timestamp: new Date().toISOString()
        })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMsg = result.message || result.error || 'Authentication failed. Please check your credentials.';
        setLoading(false);
        return { success: false, error: errorMsg };
      }

      // Successful authentication from CRM API
      const authToken = result.token || result.accessToken || `CRM-SESSION-${Date.now()}`;
      const doctorProfile = result.doctor || result.user || {
        name: 'Dr. R. Sundaram',
        title: 'Chief Medical Director & Senior Cardiologist',
        department: 'Cardiology & Hospital Administration',
        email: email.trim(),
        role: 'CHIEF_DOCTOR',
        hospital: 'NAIRA Multi-Speciality Hospital'
      };

      // Store auth token in storage (NEVER store password!)
      if (rememberMe) {
        localStorage.setItem(TOKEN_KEY, authToken);
        localStorage.setItem(DOCTOR_KEY, JSON.stringify(doctorProfile));
        localStorage.setItem(REMEMBER_EMAIL_KEY, email.trim());
        setRememberedEmail(email.trim());
      } else {
        sessionStorage.setItem(TOKEN_KEY, authToken);
        sessionStorage.setItem(DOCTOR_KEY, JSON.stringify(doctorProfile));
        localStorage.removeItem(REMEMBER_EMAIL_KEY);
        setRememberedEmail('');
      }

      setToken(authToken);
      setDoctor(doctorProfile);
      setLoading(false);

      return {
        success: true,
        data: doctorProfile,
        redirectUrl: result.crmDashboardUrl || import.meta.env.VITE_CRM_EXTERNAL_URL || '/doctor-crm'
      };
    } catch (err) {
      setLoading(false);
      return {
        success: false,
        error: err.message.includes('Failed to fetch')
          ? 'Unable to connect to Chief Doctor CRM server. Please ensure the backend is running.'
          : err.message
      };
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(DOCTOR_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(DOCTOR_KEY);
    setToken(null);
    setDoctor(null);
  };

  const value = {
    token,
    doctor,
    isAuthenticated: Boolean(token),
    loading,
    rememberedEmail,
    login,
    logout
  };

  return (
    <DoctorAuthContext.Provider value={value}>
      {children}
    </DoctorAuthContext.Provider>
  );
}

export function useDoctorAuth() {
  const context = useContext(DoctorAuthContext);
  if (!context) {
    throw new Error('useDoctorAuth must be used within a DoctorAuthProvider');
  }
  return context;
}
