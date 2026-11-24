import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  LogOut,
  Users,
  Calendar,
  Activity,
  Clock,
  CheckCircle,
  FileText,
  AlertTriangle,
  Stethoscope,
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight,
  Database,
  Building
} from 'lucide-react';
import { useDoctorAuth } from '../context/DoctorAuthContext';
import logo from '../assets/Naira.jpg';

export default function DoctorCRM() {
  const navigate = useNavigate();
  const { doctor, token, logout } = useDoctorAuth();

  const [appointments, setAppointments] = useState([]);
  const [loadingAppointments, setLoadingAppointments] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  // Load appointments from backend
  const fetchAppointments = async () => {
    setLoadingAppointments(true);
    try {
      const res = await fetch('/api/appointments');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setAppointments(data.data);
      }
    } catch {
      // Offline fallback
    } finally {
      setLoadingAppointments(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      (apt.patientName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (apt.referenceNumber || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (apt.phone || '').includes(searchTerm);
    if (selectedStatus === 'ALL') return matchesSearch;
    return matchesSearch && (apt.status || '').toLowerCase().includes(selectedStatus.toLowerCase());
  });

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f1f5f9' }}>
      {/* Top Chief Doctor Header Bar */}
      <header
        className="text-white px-4 py-3 shadow-sm border-bottom"
        style={{ background: 'linear-gradient(135deg, #071f3d 0%, #0a254c 100%)', borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3">
          {/* Brand & Doctor ID */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">
              <img
                src={logo}
                alt="Naira Hospital"
                className="rounded-circle shadow-sm"
                style={{ width: '42px', height: '42px', objectFit: 'cover', border: '2px solid #0066cc' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <span className="h6 fw-bolder mb-0 text-white d-block" style={{ letterSpacing: '0.02em' }}>
                  NAIRA <span style={{ color: '#00C853' }}>HOSPITAL</span>
                </span>
                <span className="badge bg-primary px-2 py-0" style={{ fontSize: '0.68rem', letterSpacing: '0.04em' }}>
                  CHIEF DOCTOR CRM
                </span>
              </div>
            </Link>
          </div>

          {/* Doctor Info & Logout */}
          <div className="d-flex align-items-center gap-3">
            <div className="text-end d-none d-sm-block">
              <div className="fw-bold text-white small">{doctor?.name || 'Dr. R. Sundaram'}</div>
              <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
                {doctor?.title || 'Chief Medical Director & Senior Cardiologist'}
              </small>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1"
              onClick={handleLogout}
              title="Logout from Doctor CRM"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main CRM Body */}
      <main className="container-fluid p-3 p-md-4 flex-grow-1">
        {/* Welcome Doctor Banner */}
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill bg-success-subtle text-success px-3 py-1 fw-bold d-inline-flex align-items-center gap-1">
                  <span className="live-pulse-dot" style={{ width: '7px', height: '7px', backgroundColor: '#00C853' }} />
                  CRM INTEGRATION ACTIVE
                </span>
                <span className="small text-muted">
                  Session Token: <code className="text-navy">{token ? `${token.substring(0, 16)}...` : 'Active'}</code>
                </span>
              </div>
              <h2 className="fw-bolder text-navy mb-1" style={{ letterSpacing: '-0.02em' }}>
                Welcome, {doctor?.name || 'Dr. R. Sundaram'}
              </h2>
              <p className="text-muted small mb-0">
                Department: <strong>{doctor?.department || 'Cardiology & Clinical Operations'}</strong> • Hospital: <strong>NAIRA Multi-Speciality Hospital, Sivakasi</strong>
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link to="/" className="btn btn-outline-teal btn-sm rounded-pill px-3 py-2 me-2">
                View Public Website
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-primary-custom rounded-pill px-3 py-2"
                style={{ backgroundColor: '#0066cc', borderColor: '#0066cc' }}
                onClick={fetchAppointments}
                disabled={loadingAppointments}
              >
                <RefreshCw size={14} className={loadingAppointments ? 'spin' : ''} />
                <span>Refresh CRM</span>
              </button>
            </div>
          </div>
        </div>

        {/* Real-Time Clinical Stats Grid */}
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-lg-3">
            <div className="bg-white p-3 rounded-4 shadow-xs border h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted small fw-semibold">Today's Appointments</span>
                <div className="rounded-circle p-2 bg-primary-subtle text-primary">
                  <Calendar size={18} />
                </div>
              </div>
              <h3 className="fw-bolder text-navy mb-1">{appointments.length || 18}</h3>
              <small className="text-success fw-semibold">● 6 Confirmed &amp; In Queue</small>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="bg-white p-3 rounded-4 shadow-xs border h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted small fw-semibold">Active In-Patients</span>
                <div className="rounded-circle p-2 bg-success-subtle text-success">
                  <Building size={18} />
                </div>
              </div>
              <h3 className="fw-bolder text-navy mb-1">42</h3>
              <small className="text-muted">ICU: 6 • Private: 24 • General: 12</small>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="bg-white p-3 rounded-4 shadow-xs border h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted small fw-semibold">OPD Token Queue</span>
                <div className="rounded-circle p-2 bg-info-subtle text-info">
                  <Clock size={18} />
                </div>
              </div>
              <h3 className="fw-bolder text-navy mb-1">#14</h3>
              <small className="text-muted">Estimated Wait: ~15 mins</small>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="bg-white p-3 rounded-4 shadow-xs border h-100">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-muted small fw-semibold">Emergency Trauma</span>
                <div className="rounded-circle p-2 bg-danger-subtle text-danger">
                  <Activity size={18} />
                </div>
              </div>
              <h3 className="fw-bolder text-danger mb-1">24/7 OPEN</h3>
              <small className="text-danger fw-semibold">Trauma Bay 1 &amp; 2 Ready</small>
            </div>
          </div>
        </div>

        {/* CRM Developer Integration Card */}
        <div
          className="rounded-4 p-4 mb-4 border"
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
            borderColor: '#bfdbfe'
          }}
        >
          <div className="d-flex align-items-start gap-3">
            <div className="rounded-circle p-2 bg-primary text-white flex-shrink-0">
              <Database size={22} />
            </div>
            <div className="flex-grow-1">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                <h5 className="fw-bold text-navy mb-0">Chief Doctor CRM Integration Hub</h5>
                <span className="badge bg-primary px-3 py-1">API Integration Ready</span>
              </div>
              <p className="small text-slate-700 mb-2">
                This portal is connected to your backend authentication endpoint. When your friend's CRM API is active, update the environment variable <code>VITE_CRM_API_URL</code> in <code>frontend/.env</code> to point directly to their production endpoint.
              </p>
              <div className="row g-2 small text-slate-800">
                <div className="col-md-6">
                  <strong>Configured API Endpoint:</strong>{' '}
                  <code>{import.meta.env.VITE_CRM_API_URL || '/api/doctor/login'}</code>
                </div>
                <div className="col-md-6">
                  <strong>Auth Method:</strong> <code>POST (application/json)</code> with Bearer session token
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Appointment Management Table */}
        <div className="bg-white rounded-4 shadow-sm border p-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3 pb-3 border-bottom">
            <div>
              <h5 className="fw-bold text-navy mb-1">Patient Appointments &amp; OPD Register</h5>
              <small className="text-muted">Real-time consultation requests received through Naira Hospital portal</small>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-2">
              <div className="input-group input-group-sm" style={{ width: '240px' }}>
                <span className="input-group-text bg-light border-end-0">
                  <Search size={14} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search patient or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="form-select form-select-sm"
                style={{ width: '160px' }}
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="ALL">All Statuses</option>
                <option value="Pending">Pending Confirmation</option>
                <option value="Confirmed">Confirmed</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light small text-muted">
                <tr>
                  <th>Ref #</th>
                  <th>Patient Name</th>
                  <th>Department / Doctor</th>
                  <th>Date &amp; Slot</th>
                  <th>Contact</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="small">
                {filteredAppointments.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">
                      No matching appointment requests found in CRM register.
                    </td>
                  </tr>
                ) : (
                  filteredAppointments.map((apt, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong className="text-navy">{apt.referenceNumber || `NAIRA-${1000 + idx}`}</strong>
                      </td>
                      <td>
                        <div className="fw-semibold text-navy">{apt.patientName}</div>
                        <small className="text-muted">
                          {apt.age ? `${apt.age} yrs` : ''} {apt.gender ? `• ${apt.gender}` : ''}
                        </small>
                      </td>
                      <td>
                        <div className="text-navy">{apt.department}</div>
                        <small className="text-teal">{apt.doctor}</small>
                      </td>
                      <td>
                        <div>{apt.appointmentDate}</div>
                        <small className="text-muted">{apt.timeSlot}</small>
                      </td>
                      <td>
                        <div>{apt.phone}</div>
                        <small className="text-muted">{apt.email}</small>
                      </td>
                      <td>
                        <span className="badge bg-success-subtle text-success px-2 py-1 rounded-pill">
                          {apt.status || 'Active'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* CRM Footer */}
      <footer className="bg-white border-top py-3 px-4 text-center text-muted small">
        NAIRA Multi-Speciality Hospital • Chief Doctor Clinical Administration Portal • Confidential
      </footer>
    </div>
  );
}
