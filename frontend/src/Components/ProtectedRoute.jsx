import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDoctorAuth } from '../context/DoctorAuthContext';

/**
 * Route protection wrapper for Chief Doctor CRM Dashboard.
 * Redirects unauthenticated users directly to Chief Doctor Login.
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useDoctorAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f8fafc' }}>
        <div className="text-center p-4">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Authenticating...</span>
          </div>
          <p className="text-muted fw-semibold">Verifying Chief Doctor CRM credentials...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/doctor-login" state={{ from: location }} replace />;
  }

  return children;
}
