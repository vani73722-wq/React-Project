import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Heart, Cpu, Clock, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  expert: <Heart className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
  advanced: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
  services24: <Clock className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
  patient: <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
};

const featureDetails = {
  expert: {
    badge: 'Specialized Medical Staff',
    details: 'Our team comprises certified physicians, experienced surgeons, and compassionate nursing staff trained from premier national institutions with decades of clinical excellence.',
  },
  advanced: {
    badge: 'Modern Diagnostic Systems',
    details: 'Equipped with digital radiography, 128-slice CT, high-definition ultrasonography, modular laminar flow operation theatres, and automated pathology laboratories.',
  },
  services24: {
    badge: 'Uninterrupted 24/7 Support',
    details: 'Round-the-clock emergency casualty, fully stocked 24-hour pharmacy, on-duty trauma surgeons, advanced life support ambulances, and immediate response care.',
  },
  patient: {
    badge: 'Compassionate Patient-Centered Care',
    details: 'Every patient is treated with dignity, transparent medical counseling, minimal waiting times, personalized dietary plans, and dedicated patient care coordinators.',
  },
};

export default function FeatureCard({ type, title, description }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const meta = featureDetails[type] || {
    badge: 'Healthcare Excellence',
    details: description,
  };

  return (
    <>
      <div
        className="h-full bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-blue-50 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer group"
        onClick={handleShow}
      >
        <div>
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 [&_svg]:group-hover:text-white">
            {iconMap[type] || <Heart className="w-8 h-8 text-blue-600" />}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#001f3f] mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
          <span>Read more</span>
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered className="feature-modal">
        <Modal.Header closeButton className="border-b border-slate-100">
          <Modal.Title className="text-lg sm:text-xl font-bold text-[#001f3f] flex items-center gap-2">
            <span>{title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
            {meta.badge}
          </span>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            {meta.details}
          </p>
          <div className="p-3 bg-blue-50 rounded-xl text-xs sm:text-sm text-blue-900">
            💡 <strong>Our Commitment:</strong> Continuous quality enhancement adhering to strict NABH and healthcare hygiene protocols.
          </div>
        </Modal.Body>
        <Modal.Footer className="border-t border-slate-100 flex justify-between">
          <Button variant="outline-secondary" size="sm" onClick={handleClose} className="rounded-pill px-3">
            Close
          </Button>
          <Link
            to="/contact"
            onClick={handleClose}
            className="btn btn-primary btn-sm rounded-pill px-4 text-decoration-none"
          >
            Book Appointment
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
