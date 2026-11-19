import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    patients: 0,
    doctors: 0,
  });

  useEffect(() => {
    const duration = 1400;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutQuad
      const factor = 1 - (1 - progress) * (1 - progress);

      setCounts({
        years: Math.floor(10 * factor),
        patients: Math.floor(50000 * factor),
        doctors: Math.floor(20 * factor),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          years: 10,
          patients: 50000,
          doctors: 20,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      id: 1,
      title: `${counts.years}+ Years`,
      subtitle: 'Experience Serving Sivakasi',
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0d6efd"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <line x1="12" y1="7" x2="12" y2="11" />
          <line x1="10" y1="9" x2="14" y2="9" />
          <rect x="7" y="14" width="3" height="3" rx="0.5" />
          <rect x="14" y="14" width="3" height="3" rx="0.5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: `${counts.patients.toLocaleString()}+`,
      subtitle: 'Happy Recovered Patients',
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0d6efd"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="3" />
          <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="3" />
          <path d="M8 13.5h8c0 2.5-1.8 4-4 4s-4-1.5-4-4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '24/7',
      subtitle: 'Emergency Trauma Support',
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0d6efd"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 17h4" />
          <path d="M5 17H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v2h3l3 4v4a2 2 0 0 1-2 2h-2" />
          <circle cx="7.5" cy="17.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
          <line x1="9" y1="9" x2="9" y2="13" />
          <line x1="7" y1="11" x2="11" y2="11" />
        </svg>
      ),
    },
    {
      id: 4,
      title: `${counts.doctors}+ Doctors`,
      subtitle: 'Senior Specialist Team',
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0d6efd"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
          <path d="M3 3h3" />
          <path d="M12 3h3" />
          <path d="M9 12.5V17a3.5 3.5 0 0 0 3.5 3.5h1a3.5 3.5 0 0 0 3.5-3.5v-2.5" />
          <circle cx="17" cy="12.5" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="my-10 md:my-14 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-[#001f3f] rounded-3xl text-white shadow-xl relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/15 text-blue-100">
            Our Healthcare Impact
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Why Sivakasi Trusts NAIRA
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-blue-100/90 mt-2">
            Combining compassion with world-class medical infrastructure and round-the-clock availability.
          </p>
        </div>

        {/* 4 Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 text-center text-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center border border-white/60"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#001f3f] mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium m-0 leading-tight">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
