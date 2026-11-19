function Count() {
  const stats = [
    { emoji: '🏥', title: '10+ Years', desc: 'Experience Serving Sivakasi' },
    { emoji: '😊', title: '50,000+', desc: 'Happy Recovered Patients' },
    { emoji: '🚑', title: '24/7 Emergency', desc: 'Casualty & Trauma Open' },
    { emoji: '🩺', title: '20+ Doctors', desc: 'Senior Specialist Team' },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-12 px-4 sm:px-6 rounded-3xl my-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#001f3f] m-0">
          Why Patients Trust Us
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-3" />
        <p className="text-sm sm:text-base text-slate-600 m-0 mb-8">
          Trusted healthcare in Sivakasi for your entire family.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-3xl mb-3">
                {s.emoji}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#001f3f] mb-1">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 m-0">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Count;
