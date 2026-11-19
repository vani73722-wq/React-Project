import React, { useState, useEffect } from "react";

function StatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    patients: 0,
    doctors: 0,
  });

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
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
      subtitle: "Experience Serving Sivakasi",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0b5ed7"
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
      subtitle: "Happy Patients Recovered & Happy",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0b5ed7"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="3.5" />
          <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="3.5" />
          <path d="M8 13.5h8c0 2.5-1.8 4-4 4s-4-1.5-4-4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "24/7 Emergency",
      subtitle: "Always Open",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0b5ed7"
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
      title: `${counts.doctors}+ Expert Doctors`,
      subtitle: "Specialist Team",
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0b5ed7"
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
    <section
      className="py-5"
      style={{
        backgroundColor: "#d5e9ff",
        background: "linear-gradient(180deg, #d8ebfd 0%, #cce4fc 100%)",
        width: "100%",
        paddingTop: "60px",
        paddingBottom: "70px",
        borderRadius: "24px",
        marginTop: "30px",
      }}
    >
      <div className="container">
        {/* Title & Subtitle */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#0f233d",
              marginBottom: "10px",
              letterSpacing: "-0.5px",
            }}
          >
            Why Patients Trust Us
          </h2>
          <div
            style={{
              width: "48px",
              height: "4px",
              backgroundColor: "#0d6efd",
              borderRadius: "4px",
              margin: "0 auto 16px auto",
            }}
          ></div>
          <p
            style={{
              fontSize: "18px",
              color: "#4a5a70",
              fontWeight: "500",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Trusted care with experience, love and 24/7 support
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="row g-4 justify-content-center">
          {stats.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card h-100 border-0 text-center count-card"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "22px",
                  padding: "35px 20px 30px",
                  boxShadow: "0 10px 25px rgba(13, 110, 253, 0.08)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 35px rgba(13, 110, 253, 0.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(13, 110, 253, 0.08)";
                }}
              >
                {/* Circular Icon Container */}
                <div
                  className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "74px",
                    height: "74px",
                    borderRadius: "50%",
                    backgroundColor: "#dbeaff",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Count Title */}
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#0f233d",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#5b6b80",
                    fontWeight: "500",
                    lineHeight: "1.4",
                    marginBottom: "0",
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
