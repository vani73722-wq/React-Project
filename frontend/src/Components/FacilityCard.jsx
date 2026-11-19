import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FacilityCard({
  imgUrl,
  icon: Icon,
  title,
  description = 'Equipped with modern medical engineering and patient-friendly environment.',
  features = ['NABH Compliant', '24/7 Monitored', 'Sterile Environment'],
}) {
  const [show, setShow] = useState(false);
  const fallbackImg = '/scan.jpg';

  const renderIcon = () => {
    if (!Icon) return <span>🏥</span>;
    if (React.isValidElement(Icon)) return Icon;
    if (typeof Icon === 'string') return <span className="text-xl">{Icon}</span>;
    if (typeof Icon === 'function' || typeof Icon === 'object') {
      const Comp = Icon;
      return <Comp size={22} className="text-blue-600" />;
    }
    return <span>🏥</span>;
  };

  return (
    <>
      <div
        className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-blue-50 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
        onClick={() => setShow(true)}
      >
        <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
          <img
            src={imgUrl || fallbackImg}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImg;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge Icon */}
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
            {renderIcon()}
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-lg font-bold m-0 leading-tight text-white drop-shadow">
              {title}
            </h3>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
            <span>View Infrastructure</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>

      {/* Facility Details Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-lg font-bold text-[#001f3f] flex items-center gap-2">
            {renderIcon()}
            <span>{title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="rounded-xl overflow-hidden mb-3 aspect-video bg-slate-100">
            <img
              src={imgUrl || fallbackImg}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackImg;
              }}
            />
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {description}
          </p>
          <div className="bg-blue-50 p-3 rounded-xl">
            <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Key Highlights:</div>
            <ul className="text-xs sm:text-sm text-blue-800 space-y-1 list-disc list-inside m-0">
              {features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" size="sm" onClick={() => setShow(false)} className="rounded-pill">
            Close
          </Button>
          <Link
            to="/contact"
            onClick={() => setShow(false)}
            className="btn btn-primary btn-sm rounded-pill text-decoration-none"
          >
            Inquire / Tour Facility
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
