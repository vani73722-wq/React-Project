import React from 'react';

function ContactInfoCard({ icon, title, value }) {
  return (
    <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', padding: '20px', textAlign: 'center', width: '250px' }}>
      <div style={{ fontSize: '28px', marginBottom: '10px' }}>{icon}</div>
      <h3 style={{ color: '#0B2F6B', fontSize: '16px', margin: '0 0 5px 0' }}>{title}</h3>
      <p style={{ color: '#555', fontSize: '14px', margin: '0' }}>{value}</p>
    </div>
  );
}

export default ContactInfoCard