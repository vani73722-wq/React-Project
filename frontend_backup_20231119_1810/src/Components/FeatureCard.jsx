import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Heart, Cpu, Clock, Users } from 'lucide-react';

const iconMap = {
  expert: <Heart size={48} className="text-primary" />, // placeholder
  advanced: <Cpu size={48} className="text-primary" />,
  services24: <Clock size={48} className="text-primary" />,
  patient: <Users size={48} className="text-primary" />,
};

export default function FeatureCard({ type, title, description }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="text-center p-4 bg-white rounded-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={handleShow}
      >
        <div className="mb-3">{iconMap[type]}</div>
        <h5 className="fw-bold text-primary">{title}</h5>
        <p className="text-muted mb-0" style={{ minHeight: '3rem' }}>{description}</p>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
          {/* Placeholder for expanded content – can be replaced with real details */}
          <p>Detailed information about {title.toLowerCase()} will go here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
