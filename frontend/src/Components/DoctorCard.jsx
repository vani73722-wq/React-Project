import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Calendar, Clock, Phone, Award, UserRound } from 'lucide-react';

export default function DoctorCard({
  photo,
  name,
  speciality,
  experience,
  phone = '+91 89405 85378',
  timings = '9:00 AM - 1:00 PM & 5:00 PM - 8:00 PM',
  qualification = 'MBBS, MD / MS',
}) {
  const [showProfile, setShowProfile] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div className="h-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg border border-blue-50 transition-all duration-300 flex flex-col justify-between items-center text-center group">
        <div className="w-full flex flex-col items-center">
          {/* Doctor Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
            <div className="w-full h-full rounded-full overflow-hidden border-3 border-blue-100 shadow-inner bg-blue-50 flex items-center justify-center">
              {!imgError && photo ? (
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-blue-600">
                  <UserRound size={48} className="text-blue-500/80" />
                </div>
              )}
            </div>
            <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Available for consultation" />
          </div>

          {/* Doctor Details */}
          <h3 className="text-base sm:text-lg font-bold text-[#001f3f] mb-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          <span className="inline-block px-3 py-0.5 mb-2 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">
            {speciality}
          </span>

          <div className="w-full text-xs text-slate-500 space-y-1 my-2">
            <p className="m-0 flex items-center justify-center gap-1.5">
              <Award size={14} className="text-blue-500" />
              <span>{experience} years experience</span>
            </p>
            <p className="m-0 flex items-center justify-center gap-1.5">
              <Clock size={14} className="text-slate-400" />
              <span>{timings}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full pt-4 mt-2 border-t border-slate-100 flex flex-wrap gap-2 justify-center">
          <button
            type="button"
            onClick={() => setShowProfile(true)}
            className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 text-xs font-medium"
          >
            Profile
          </button>
          <Link
            to="/contact"
            className="btn btn-primary btn-sm rounded-pill px-3 py-1 text-xs font-medium text-decoration-none shadow-sm"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Doctor Profile Modal */}
      <Modal show={showProfile} onHide={() => setShowProfile(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-lg font-bold text-[#001f3f]">Doctor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center shrink-0">
              <UserRound size={36} className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#001f3f] m-0">{name}</h4>
              <p className="text-xs font-semibold text-blue-600 m-0">{speciality} Specialist</p>
              <p className="text-xs text-slate-500 mt-1 m-0">{qualification} • {experience}+ Years Clinical Exp.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl text-xs sm:text-sm space-y-2 text-slate-700">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-600 shrink-0" />
              <span><strong>OPD Timings:</strong> {timings}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-emerald-600 shrink-0" />
              <span><strong>Hospital Desk:</strong> {phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-purple-600 shrink-0" />
              <span><strong>Days:</strong> Monday through Saturday</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={() => setShowProfile(false)} className="rounded-pill">
            Close
          </Button>
          <Link
            to="/contact"
            onClick={() => setShowProfile(false)}
            className="btn btn-primary btn-sm rounded-pill text-decoration-none"
          >
            Book Appointment Now
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
