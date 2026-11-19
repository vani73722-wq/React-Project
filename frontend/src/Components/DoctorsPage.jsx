import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  Award,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  UserCheck
} from 'lucide-react';
import Modal from './Modal';

export default function DoctorsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedTiming, setSelectedTiming] = useState('All');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Realistic sample doctors list across all departments with individual images
  const doctorsList = [
    {
      id: 'doc-1',
      name: 'Dr. Sarah Johnson',
      qualification: 'MBBS, MD (General Medicine), DM (Cardiology)',
      specialization: 'Senior Interventional Cardiologist',
      department: 'Cardiology',
      experience: 14,
      image: '/images/doctors/doctor-1.jpg',
      timings: 'Morning (9:00 AM - 1:00 PM)',
      timingCategory: 'Morning',
      days: 'Mon - Fri',
      room: 'OPD Room 102 (Cardio Suite)',
      fee: '₹500 (Demo Consultation)',
      bio: 'Dr. Sarah Johnson has over 14 years of experience treating cardiac arrhythmias, coronary artery disorders, and clinical hypertension. She emphasizes preventive cardiovascular health and lifestyle counseling.',
      awards: 'Best Clinical Cardiologist Award 2023'
    },
    {
      id: 'doc-2',
      name: 'Dr. Michael Chen',
      qualification: 'MBBS, MD (Internal Medicine), DNB',
      specialization: 'Consultant Physician & Diabetologist',
      department: 'General Medicine',
      experience: 16,
      image: '/images/doctors/doctor-2.jpg',
      timings: 'Afternoon (2:00 PM - 5:00 PM)',
      timingCategory: 'Afternoon',
      days: 'Mon - Sat',
      room: 'OPD Room 105 (Medical Block)',
      fee: '₹400 (Demo Consultation)',
      bio: 'Dr. Michael Chen specializes in internal medicine, complex fever diagnosis, glycemic control for diabetic patients, and comprehensive preventive health checkups.',
      awards: 'Excellence in Internal Medicine 2022'
    },
    {
      id: 'doc-3',
      name: 'Dr. Priya Raman',
      qualification: 'MBBS, MS (Obstetrics & Gynecology), FMAS',
      specialization: 'Senior Obstetrician & Gynecologist',
      department: 'Gynecology',
      experience: 12,
      image: '/images/doctors/doctor-3.jpg',
      timings: 'Morning (9:00 AM - 1:00 PM)',
      timingCategory: 'Morning',
      days: 'Mon - Sat',
      room: 'OPD Room 201 (Women’s Health)',
      fee: '₹500 (Demo Consultation)',
      bio: 'Dr. Priya Raman is passionate about gentle antenatal care, high-risk pregnancy management, and laparoscopic gynecology. Dedicated to natural births and postpartum maternal wellness.',
      awards: 'Maternal Care Recognition 2024'
    },
    {
      id: 'doc-4',
      name: 'Dr. Rajesh Kumar',
      qualification: 'MBBS, MS (Orthopedics), Fellowship in Joint Replacement',
      specialization: 'Consultant Orthopedic & Joint Surgeon',
      department: 'Orthopedics',
      experience: 15,
      image: '/images/doctors/doctor-4.jpg',
      timings: 'Evening (5:00 PM - 8:30 PM)',
      timingCategory: 'Evening',
      days: 'Mon - Fri',
      room: 'OPD Room 108 (Ortho Wing)',
      fee: '₹550 (Demo Consultation)',
      bio: 'Dr. Rajesh Kumar specializes in knee and hip joint replacements, trauma fracture fixations, sports injury arthroscopy, and conservative spine pain therapies.',
      awards: 'Orthopedic Innovation Award 2021'
    },
    {
      id: 'doc-5',
      name: 'Dr. Ananya Sharma',
      qualification: 'MBBS, DCH, DNB (Pediatrics)',
      specialization: 'Consultant Pediatrician & Neonatologist',
      department: 'Pediatrics',
      experience: 10,
      image: '/images/doctors/doctor-5.jpg',
      timings: 'Morning (9:00 AM - 1:00 PM)',
      timingCategory: 'Morning',
      days: 'Mon - Sat',
      room: 'OPD Room 204 (Child Clinic)',
      fee: '₹450 (Demo Consultation)',
      bio: 'Dr. Ananya Sharma provides warm, child-friendly care from newborn resuscitation to developmental pediatrics, childhood nutrition, and gentle vaccination programs.',
      awards: 'Child Healthcare Champion 2023'
    },
    {
      id: 'doc-6',
      name: 'Dr. David Wilson',
      qualification: 'MBBS, MS (General Surgery), MCh (Surgical Gastro)',
      specialization: 'Senior General & Laparoscopic Surgeon',
      department: 'Surgery',
      experience: 18,
      image: '/images/doctors/doctor-6.jpg',
      timings: 'Afternoon (2:00 PM - 5:00 PM)',
      timingCategory: 'Afternoon',
      days: 'Tue - Sat',
      room: 'Surgical Block Suite 3',
      fee: '₹600 (Demo Consultation)',
      bio: 'Dr. David Wilson is a veteran surgeon performing advanced minimally invasive laparoscopic gallbladder, hernia, appendiceal, and acute abdominal emergency procedures.',
      awards: 'Distinguished Surgeon Medal 2020'
    },
    {
      id: 'doc-7',
      name: 'Dr. Kavitha Nair',
      qualification: 'MBBS, MD (DVL - Dermatology & Leprosy)',
      specialization: 'Consultant Dermatologist & Cosmetologist',
      department: 'Dermatology',
      experience: 11,
      image: '/images/doctors/doctor-7.jpg',
      timings: 'Evening (5:00 PM - 8:30 PM)',
      timingCategory: 'Evening',
      days: 'Mon - Fri',
      room: 'OPD Room 110 (Skin Care)',
      fee: '₹500 (Demo Consultation)',
      bio: 'Dr. Kavitha Nair specializes in clinical skin pathologies, psoriasis, eczema, pediatric dermatoses, allergy patch tests, and gentle laser dermato-therapies.',
      awards: 'Clinical Dermatology Excellence 2022'
    },
    {
      id: 'doc-8',
      name: 'Dr. Arun Varma',
      qualification: 'MBBS, MD (Medicine), DM (Neurology)',
      specialization: 'Consultant Neurologist',
      department: 'Neurology',
      experience: 13,
      image: '/images/doctors/doctor-8.jpg',
      timings: 'Morning (9:00 AM - 1:00 PM)',
      timingCategory: 'Morning',
      days: 'Mon - Thu',
      room: 'OPD Room 114 (Neuro Suite)',
      fee: '₹650 (Demo Consultation)',
      bio: 'Dr. Arun Varma specializes in headache syndromes, migraine management, acute stroke protocols, epilepsy, neuropathy, and neuro-rehabilitation.',
      awards: 'Neuroscience Research Award 2024'
    }
  ];

  // Filter logic
  const filteredDoctors = doctorsList.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    const matchesTiming = selectedTiming === 'All' || doc.timingCategory === selectedTiming;

    return matchesSearch && matchesDept && matchesTiming;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDept('All');
    setSelectedTiming('All');
  };

  return (
    <div className="bg-light-blue">
      {/* 1. DOCTORS HERO SECTION */}
      <section className="py-5 bg-white border-bottom border-light">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-start">
              <span className="section-badge">Skilled Professionals. Compassionate Care.</span>
              <h1 className="fw-bolder text-navy display-5 lh-sm mb-3">Our Doctors</h1>
              <p className="lead text-muted fs-6 mb-4">
                Meet our team of experienced doctors and healthcare specialists, dedicated to your health, comfort, and well-being.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/appointment" className="btn-primary-custom">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a href="#directory" className="btn-secondary-custom">
                  Browse Specialists
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="/images/about/team.jpg"
                alt="NAIRA Hospital Doctors and Medical Staff"
                className="rounded-4 shadow-lg w-100 object-fit-cover border border-white border-3"
                style={{ maxHeight: '380px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/about/interior.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER BAR */}
      <section className="py-4 bg-white border-bottom border-light sticky-top" style={{ top: '65px', zIndex: 990 }} id="directory">
        <div className="container">
          <div className="row g-3 align-items-center">
            {/* Search Input */}
            <div className="col-lg-4 col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 rounded-start-pill text-muted">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control bg-light border-start-0 rounded-end-pill py-2"
                  placeholder="Search doctor by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Department Dropdown */}
            <div className="col-lg-3 col-md-3 col-6">
              <select
                className="form-select rounded-pill py-2 bg-light text-navy fw-medium"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="All">All Departments</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Surgery">Surgery</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>

            {/* Timings Dropdown */}
            <div className="col-lg-3 col-md-3 col-6">
              <select
                className="form-select rounded-pill py-2 bg-light text-navy fw-medium"
                value={selectedTiming}
                onChange={(e) => setSelectedTiming(e.target.value)}
              >
                <option value="All">All Timings</option>
                <option value="Morning">Morning (9 AM - 1 PM)</option>
                <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening">Evening (5 PM - 8:30 PM)</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="col-lg-2 col-12 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-2 w-100 d-flex align-items-center justify-content-center gap-1"
                onClick={clearFilters}
              >
                <RefreshCw size={14} /> Clear Filters
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-light" style={{ fontSize: '0.85rem' }}>
            <span className="text-muted">
              Showing <strong>{filteredDoctors.length}</strong> of <strong>{doctorsList.length}</strong> Doctors
            </span>
            <span className="badge bg-royal-light text-royal px-3 py-1 rounded-pill">
              * Editable Sample Doctor Profiles for Demo
            </span>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR PROFILE CARDS GRID */}
      <section className="py-5">
        <div className="container">
          {filteredDoctors.length === 0 ? (
            <div className="bg-white rounded-4 p-5 text-center shadow-sm">
              <UserCheck size={48} className="text-muted mb-3" />
              <h4 className="fw-bold text-navy">No doctors found</h4>
              <p className="text-muted">Try adjusting your search terms or clearing selected filters.</p>
              <button type="button" className="btn-primary-custom" onClick={clearFilters}>
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="row g-4 text-start">
              {filteredDoctors.map((doc) => (
                <div className="col-lg-3 col-md-6" key={doc.id}>
                  <div className="hospital-card h-100 d-flex flex-column justify-content-between">
                    <div>
                      {/* Doctor Image Container */}
                      <div className="position-relative" style={{ height: '230px', backgroundColor: '#071f3d' }}>
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-100 h-100 object-fit-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/doctors/doctor-1.jpg';
                          }}
                        />
                        <span className="position-absolute top-0 end-0 m-2 badge bg-success text-white px-2 py-1 rounded-pill small">
                          Available Today
                        </span>
                      </div>

                      {/* Doctor Info */}
                      <div className="p-3">
                        <span className="badge bg-royal-light text-royal mb-2">{doc.department}</span>
                        <h4 className="fw-bold text-navy fs-5 mb-1">{doc.name}</h4>
                        <div className="text-royal fw-semibold small mb-1">{doc.specialization}</div>
                        <div className="text-muted small mb-2" style={{ fontSize: '0.78rem' }}>
                          {doc.qualification}
                        </div>

                        <div className="d-flex align-items-center gap-1 text-muted small mb-1">
                          <Award size={14} className="text-royal" /> {doc.experience} Years Experience
                        </div>
                        <div className="d-flex align-items-center gap-1 text-muted small">
                          <Clock size={14} className="text-royal" /> {doc.timings}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-3 pt-0 d-flex flex-column gap-2">
                      <button
                        type="button"
                        className="btn-secondary-custom btn-sm w-100 justify-content-center"
                        onClick={() => setSelectedDoctor(doc)}
                      >
                        View Profile
                      </button>
                      <Link
                        to={`/appointment?doctor=${encodeURIComponent(doc.name)}&department=${encodeURIComponent(doc.department)}`}
                        className="btn-primary-custom btn-sm w-100 justify-content-center"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. CONSULTATION PREPARATION TIPS */}
      <section className="py-5 bg-white border-top border-bottom border-light">
        <div className="container py-lg-3">
          <div className="row align-items-center g-5 text-start">
            <div className="col-lg-6">
              <span className="section-badge">Patient Advisory</span>
              <h2 className="section-title fs-2 mb-3">How to Prepare for Your Doctor Consultation</h2>
              <p className="text-muted mb-4">
                To help our medical team provide the most accurate assessment, we recommend keeping the following ready for your OPD visit:
              </p>
              <ul className="list-unstyled mb-0" style={{ fontSize: '0.92rem' }}>
                <li className="d-flex align-items-start gap-2 mb-3 text-navy">
                  <CheckCircle2 size={18} className="text-royal flex-shrink-0 mt-1" />
                  <div>
                    <strong>Medical Records & Past Reports:</strong> Bring recent blood tests, scan images, discharge summaries, or previous prescriptions.
                  </div>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-navy">
                  <CheckCircle2 size={18} className="text-royal flex-shrink-0 mt-1" />
                  <div>
                    <strong>Medication List:</strong> Note down the names and dosages of all current medicines, inhalers, or dietary supplements you take.
                  </div>
                </li>
                <li className="d-flex align-items-start gap-2 mb-3 text-navy">
                  <CheckCircle2 size={18} className="text-royal flex-shrink-0 mt-1" />
                  <div>
                    <strong>Symptom Timeline:</strong> Be prepared to describe when symptoms started, their severity, and what makes them better or worse.
                  </div>
                </li>
                <li className="d-flex align-items-start gap-2 text-navy">
                  <CheckCircle2 size={18} className="text-royal flex-shrink-0 mt-1" />
                  <div>
                    <strong>Arrive 15 Minutes Early:</strong> Allows sufficient time for registration, blood pressure, and preliminary vitals check.
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-light-blue border border-primary border-opacity-10">
                <h4 className="fw-bold text-navy mb-3">Need Help Choosing a Specialist?</h4>
                <p className="text-muted small mb-4">
                  If you are unsure which department or doctor is right for your symptoms, our hospital reception triage staff will guide you.
                </p>
                <div className="d-flex flex-column gap-3">
                  <a href="tel:8940585378" className="btn-primary-custom w-100 justify-content-center">
                    <Phone size={16} /> Call Hospital Reception: 8940585378
                  </a>
                  <Link to="/appointment" className="btn-secondary-custom w-100 justify-content-center">
                    <Calendar size={16} /> Book General Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE MODAL */}
      {selectedDoctor && (
        <Modal
          isOpen={!!selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          title={`Doctor Profile - ${selectedDoctor.name}`}
          size="lg"
        >
          <div className="row g-4 text-start">
            <div className="col-md-5">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="rounded-4 shadow-sm w-100 object-fit-cover mb-3"
                style={{ maxHeight: '280px' }}
              />
              <div className="p-3 bg-light-blue rounded-3 border border-light">
                <div className="small text-muted mb-1">Consultation Details:</div>
                <div className="fw-bold text-navy mb-1">{selectedDoctor.room}</div>
                <div className="small text-muted mb-1">
                  <strong>Available Days:</strong> {selectedDoctor.days}
                </div>
                <div className="small text-muted mb-1">
                  <strong>Timings:</strong> {selectedDoctor.timings}
                </div>
                <div className="small text-royal fw-semibold">
                  <strong>Fee:</strong> {selectedDoctor.fee}
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <span className="badge bg-royal text-white mb-2">{selectedDoctor.department}</span>
              <h4 className="fw-bold text-navy mb-1">{selectedDoctor.name}</h4>
              <div className="text-royal fw-semibold mb-2">{selectedDoctor.specialization}</div>
              <div className="text-muted small mb-3">{selectedDoctor.qualification}</div>

              <h6 className="fw-bold text-navy small mb-1">About Doctor:</h6>
              <p className="text-muted small mb-3">{selectedDoctor.bio}</p>

              <h6 className="fw-bold text-navy small mb-1">Achievements & Distinctions:</h6>
              <p className="text-muted small mb-4 d-flex align-items-center gap-1">
                <Sparkles size={16} className="text-warning flex-shrink-0" />
                <span>{selectedDoctor.awards}</span>
              </p>

              <div className="d-flex flex-wrap gap-2 pt-2 border-top border-light">
                <Link
                  to={`/appointment?doctor=${encodeURIComponent(selectedDoctor.name)}&department=${encodeURIComponent(selectedDoctor.department)}`}
                  className="btn-primary-custom"
                  onClick={() => setSelectedDoctor(null)}
                >
                  <Calendar size={16} /> Book Appointment with {selectedDoctor.name}
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-3"
                  onClick={() => setSelectedDoctor(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
