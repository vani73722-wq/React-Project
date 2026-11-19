import { Link } from 'react-router-dom';

function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade rounded-3xl overflow-hidden shadow-lg" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-slate-900">
            <img
              src="/hospic.png"
              className="w-full h-full object-cover opacity-85"
              alt="Naira Multi Specialist Hospital"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/care.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white text-left max-w-xl">
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
                  Naira Multi-Specialty Hospital
                </h2>
                <p className="text-xs sm:text-base text-slate-200 mb-4">
                  Trusted healthcare in Sivakasi with round-the-clock emergency support.
                </p>
                <Link to="/contact" className="btn btn-primary rounded-pill px-4 py-2 text-xs sm:text-sm font-medium text-decoration-none">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-slate-900">
            <img
              src="/care.jpg"
              className="w-full h-full object-cover opacity-85"
              alt="Expert Doctors, Caring Hands"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/scan.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white text-left max-w-xl">
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
                  Expert Doctors, Caring Hands
                </h2>
                <p className="text-xs sm:text-base text-slate-200 mb-4">
                  Specialist team dedicated to your family's continuous well-being.
                </p>
                <a href="tel:8940585378" className="btn btn-danger rounded-pill px-4 py-2 text-xs sm:text-sm font-medium text-decoration-none">
                  Emergency Call
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-slate-900">
            <img
              src="/scan.jpg"
              className="w-full h-full object-cover opacity-85"
              alt="First-Class in Medical Facilities"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/hospic.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white text-left max-w-xl">
                <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
                  First-Class Medical Facilities
                </h2>
                <p className="text-xs sm:text-base text-slate-200 mb-4">
                  Advanced Scan, Lab & ICU - Everything under one roof.
                </p>
                <Link to="/facilities" className="btn btn-primary rounded-pill px-4 py-2 text-xs sm:text-sm font-medium text-decoration-none">
                  Our Facilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
