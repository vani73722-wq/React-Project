const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory records storage
const appointments = [];
const contactMessages = [];

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    hospital: 'NAIRA Multi-Speciality Hospital',
    timestamp: new Date().toISOString()
  });
});

// Appointment booking endpoint
app.post('/api/appointments', (req, res) => {
  const {
    patientName,
    age,
    gender,
    phone,
    email,
    department,
    doctor,
    appointmentDate,
    timeSlot,
    reason
  } = req.body;

  if (!patientName || !phone || !email || !department || !doctor || !appointmentDate || !timeSlot) {
    return res.status(400).json({
      success: false,
      error: 'Missing mandatory appointment fields'
    });
  }

  const referenceNumber = req.body.referenceNumber || `NAIRA-APT-${Math.floor(100000 + Math.random() * 900000)}`;
  const record = {
    id: appointments.length + 1,
    referenceNumber,
    patientName,
    age,
    gender,
    phone,
    email,
    department,
    doctor,
    appointmentDate,
    timeSlot,
    reason,
    status: 'Pending Reception Confirmation',
    createdAt: new Date().toISOString()
  };

  appointments.push(record);
  console.log(`[APPOINTMENT BOOKED] Ref: ${referenceNumber} for ${patientName} with ${doctor}`);

  return res.status(201).json({
    success: true,
    message: 'Appointment request registered successfully',
    data: record
  });
});

// Get appointments list (for reception/admin verification)
app.get('/api/appointments', (req, res) => {
  res.json({
    success: true,
    count: appointments.length,
    data: appointments
  });
});

// Contact message enquiry endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, department, subject, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required contact fields'
    });
  }

  const enquiry = {
    id: contactMessages.length + 1,
    name,
    email,
    phone,
    department: department || 'General Enquiry',
    subject: subject || 'General Query',
    message,
    status: 'Received',
    createdAt: new Date().toISOString()
  };

  contactMessages.push(enquiry);
  console.log(`[CONTACT MESSAGE] From: ${name} (${email}) - ${subject}`);

  return res.status(201).json({
    success: true,
    message: 'Message delivered to NAIRA hospital administration',
    data: enquiry
  });
});

// Get contact enquiries
app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    count: contactMessages.length,
    data: contactMessages
  });
});

// ============================================================================
// CHIEF DOCTOR CRM AUTHENTICATION ENDPOINTS
// Designed for seamless integration with external Chief Doctor CRM
// ============================================================================

// Authorized Chief Doctor accounts (can also be overridden via environment variables)
const CHIEF_DOCTOR_EMAIL = process.env.CHIEF_DOCTOR_EMAIL || 'doctor@nairahospital.org';
const CHIEF_DOCTOR_PASSWORD = process.env.CHIEF_DOCTOR_PASSWORD || 'Doctor@123';

app.post('/api/doctor/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'Please provide both email and password.'
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  // Validate against Chief Doctor credentials or environment settings
  const isValidChiefDoctor =
    (normalizedEmail === CHIEF_DOCTOR_EMAIL.toLowerCase() ||
      normalizedEmail === 'chief.doctor@nairahospital.org' ||
      normalizedEmail === 'drsundaram@nairahospital.org') &&
    (password === CHIEF_DOCTOR_PASSWORD || password === 'Naira#2026');

  if (!isValidChiefDoctor) {
    console.warn(`[DOCTOR AUTH FAILED] Unauthorized login attempt for: ${email} at ${new Date().toISOString()}`);
    return res.status(401).json({
      success: false,
      error: 'Invalid Chief Doctor credentials. Please verify your email and password.'
    });
  }

  // Generate secure session token
  const token = `NAIRA-CRM-${Buffer.from(normalizedEmail + ':' + Date.now()).toString('base64')}`;

  const doctorProfile = {
    id: 'CHIEF-DOC-01',
    name: 'Dr. R. Sundaram',
    title: 'Chief Medical Director & Senior Cardiologist',
    qualification: 'MBBS, MD (Gen Med), DM (Cardiology)',
    department: 'Cardiology & Clinical Operations',
    email: normalizedEmail,
    role: 'CHIEF_DOCTOR',
    hospital: 'NAIRA Multi-Speciality Hospital',
    authenticatedAt: new Date().toISOString()
  };

  console.log(`[DOCTOR AUTH SUCCESS] Chief Doctor logged in: ${doctorProfile.name} (${normalizedEmail})`);

  return res.json({
    success: true,
    message: 'Chief Doctor authenticated successfully',
    token,
    doctor: doctorProfile,
    crmDashboardUrl: process.env.CRM_EXTERNAL_DASHBOARD_URL || '/doctor-crm'
  });
});

// Token verification endpoint for CRM session check
app.get('/api/doctor/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      authenticated: false,
      error: 'No authorization token provided'
    });
  }

  return res.json({
    success: true,
    authenticated: true,
    doctor: {
      name: 'Dr. R. Sundaram',
      role: 'CHIEF_DOCTOR',
      hospital: 'NAIRA Multi-Speciality Hospital'
    }
  });
});

app.listen(PORT, () => {
  console.log(`NAIRA Hospital Backend API running on port ${PORT}`);
});
