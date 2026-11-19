export default function ContactInfoCard({ icon, title, value, detail, actionLink }) {
  const displayValue = value || detail;

  const content = (
    <div className="h-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-blue-50 transition-all flex items-start gap-4 text-left">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#001f3f] m-0 mb-1">{title}</h4>
        <p className="text-xs sm:text-sm text-slate-600 m-0 leading-relaxed font-medium">
          {displayValue}
        </p>
      </div>
    </div>
  );

  if (actionLink) {
    return (
      <a href={actionLink} className="text-decoration-none block h-full">
        {content}
      </a>
    );
  }

  return content;
}
