import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ServicesPage from './Components/ServicesPage';
import DoctorsPage from './Components/DoctorsPage';
import FacilitiesPage from './Components/FacilitiesPage';
import ContactPage from './Components/ContactPage';
import AppointmentPage from './Components/AppointmentPage';
import DoctorLogin from './Components/DoctorLogin';
import DoctorCRM from './Components/DoctorCRM';
import ProtectedRoute from './Components/ProtectedRoute';
import { DoctorAuthProvider } from './context/DoctorAuthContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Layout wrapper to conditionally hide public Navbar/Footer on dedicated CRM portal pages
function AppLayout() {
  const location = useLocation();
  const isCrmRoute =
    location.pathname === '/doctor-login' ||
    location.pathname === '/login' ||
    location.pathname === '/doctor-crm';

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-blue">
      {!isCrmRoute && <Navbar />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />

          {/* Chief Doctor Login & Protected CRM Dashboard Routes */}
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/login" element={<Navigate to="/doctor-login" replace />} />
          <Route
            path="/doctor-crm"
            element={
              <ProtectedRoute>
                <DoctorCRM />
              </ProtectedRoute>
            }
          />

          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      {!isCrmRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <DoctorAuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </DoctorAuthProvider>
  );
}
