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

app.listen(PORT, () => {
  console.log(`NAIRA Hospital Backend API running on port ${PORT}`);
});
