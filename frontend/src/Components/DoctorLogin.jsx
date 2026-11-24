import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Stethoscope,
  Building,
  KeyRound,
  Phone,
  HelpCircle,
  X
} from 'lucide-react';
import { useDoctorAuth } from '../context/DoctorAuthContext';
import logo from '../assets/Naira.jpg';

export default function DoctorLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated, loading: authLoading, rememberedEmail } = useDoctorAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);

  // If already logged in, redirect to CRM
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/doctor-crm';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  // Pre-fill remembered email if saved
  useEffect(() => {
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, [rememberedEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    // Field validations
    if (!email.trim()) {
      setError('Please enter your Chief Doctor official email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid institutional email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    setSubmitting(true);

    const result = await login(email, password, rememberMe);

    if (result.success) {
      setSuccessMsg('Authentication successful! Connecting to Chief Doctor CRM...');
      setTimeout(() => {
        if (result.redirectUrl?.startsWith('http')) {
          window.location.href = result.redirectUrl;
        } else {
          const destination = location.state?.from?.pathname || result.redirectUrl || '/doctor-crm';
          navigate(destination, { replace: true });
        }
      }, 700);
    } else {
      setError(result.error || 'Invalid doctor credentials. Please check and try again.');
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3"
      style={{
        background: 'linear-gradient(135deg, #071f3d 0%, #0c2d59 50%, #071f3d 100%)',
        position: 'relative'
      }}
    >
      {/* Decorative ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 200, 83, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 204, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ maxWidth: '520px', position: 'relative', zIndex: 1 }}>
        {/* Back to Home Link */}
        <div className="mb-3">
          <Link
            to="/"
            className="text-white-50 text-decoration-none d-inline-flex align-items-center gap-2 small fw-semibold px-2 py-1 rounded"
            style={{ transition: 'color 0.2s ease' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Hospital Website</span>
          </Link>
        </div>

        {/* Main Card */}
        <div
          className="bg-white rounded-4 shadow-lg border p-4 p-sm-5"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
          }}
        >
          {/* Hospital Brand & Badge */}
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center justify-content-center mb-3">
              <img
                src={logo}
                alt="Naira Hospital Logo"
                className="rounded-circle shadow-sm"
                style={{ width: '56px', height: '56px', objectFit: 'cover', border: '3px solid #0066cc' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="text-muted text-uppercase fw-bold small" style={{ letterSpacing: '0.08em', fontSize: '0.78rem' }}>
              Naira Multi-Speciality Hospital
            </div>
            <h2 className="fw-bolder text-navy mt-1 mb-1" style={{ letterSpacing: '-0.02em', fontSize: '1.75rem' }}>
              Chief Doctor Login
            </h2>
            <p className="text-muted small mb-0">
              Secure clinical administration & patient CRM management portal
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div
              className="alert alert-danger py-2 px-3 small rounded-3 d-flex align-items-start gap-2 mb-3"
              role="alert"
            >
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
              <div>{error}</div>
            </div>
          )}

          {/* Success Banner */}
          {successMsg && (
            <div
              className="alert alert-success py-2 px-3 small rounded-3 d-flex align-items-center gap-2 mb-3"
              role="alert"
            >
              <CheckCircle2 size={18} className="text-success flex-shrink-0" />
              <div>{successMsg}</div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label small fw-bold text-navy mb-1" htmlFor="doctor-email">
                Email Address *
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <Mail size={17} />
                </span>
                <input
                  id="doctor-email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="doctor@nairahospital.org"
                  className="form-control form-control-custom border-start-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label small fw-bold text-navy mb-0" htmlFor="doctor-password">
                  Password *
                </label>
                <button
                  type="button"
                  className="btn btn-link p-0 small text-decoration-none text-teal fw-semibold"
                  style={{ fontSize: '0.8rem' }}
                  onClick={() => setForgotModalOpen(true)}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <Lock size={17} />
                </span>
                <input
                  id="doctor-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your security password"
                  className="form-control form-control-custom border-start-0 border-end-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={submitting}
                />
                <button
                  type="button"
                  className="input-group-text bg-light border-start-0 text-muted"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={submitting}
                />
                <label className="form-check-label small text-muted user-select-none" htmlFor="rememberMe">
                  Remember Me on this device
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary-custom w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: '#0066cc',
                borderColor: '#0066cc',
                fontSize: '0.98rem',
                minHeight: '44px'
              }}
              disabled={submitting || authLoading}
            >
              {submitting ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                  <span>Authenticating with CRM...</span>
                </>
              ) : (
                <>
                  <KeyRound size={17} />
                  <span>Login to Chief Doctor CRM</span>
                </>
              )}
            </button>
          </form>

          {/* Security Notice Footer */}
          <div className="mt-4 pt-3 border-top text-center text-muted" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            <div className="d-inline-flex align-items-center gap-1 text-teal fw-semibold mb-1">
              <ShieldCheck size={14} />
              <span>HIPAA &amp; NABH Compliant Clinical Access</span>
            </div>
            <div>
              Restricted portal strictly for authorized Chief Medical Officers and clinical directors of Naira Hospital.
            </div>
          </div>
        </div>

        {/* Back Link bottom */}
        <div className="text-center mt-3">
          <Link to="/" className="text-white-50 text-decoration-none small">
            Return to Naira Hospital Home
          </Link>
        </div>
      </div>

      {/* Forgot Password Security Modal */}
      {forgotModalOpen && (
        <div
          className="modal-backdrop-custom"
          style={{ position: 'fixed', inset: 0, zIndex: 1060, backgroundColor: 'rgba(7, 31, 61, 0.75)' }}
          onClick={() => setForgotModalOpen(false)}
        >
          <div
            className="modal-content-custom p-4 bg-white rounded-4 shadow-lg mx-auto"
            style={{ maxWidth: '460px', marginTop: '10vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
              <div className="d-flex align-items-center gap-2">
                <HelpCircle size={20} className="text-teal" />
                <h5 className="fw-bold mb-0 text-navy">Doctor Password Recovery</h5>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-light rounded-circle p-1 text-navy"
                onClick={() => setForgotModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="small text-muted mb-3" style={{ lineHeight: '1.6' }}>
              For institutional healthcare security and patient privacy compliance, Chief Doctor credentials cannot be reset via automated email links.
            </div>

            <div className="p-3 bg-light rounded-3 mb-3 small text-navy">
              <div className="fw-bold mb-1">Please contact Hospital IT Administration:</div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <Phone size={14} className="text-teal" />
                <span>Internal Ext: <strong>108 (IT Desk)</strong></span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <Mail size={14} className="text-teal" />
                <span>Email: <strong>it.admin@nairahospital.org</strong></span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Building size={14} className="text-teal" />
                <span>Emergency Hotline: <strong>+91 8940585378</strong></span>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary-custom btn-sm px-4"
                style={{ backgroundColor: '#0066cc', borderColor: '#0066cc' }}
                onClick={() => setForgotModalOpen(false)}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
