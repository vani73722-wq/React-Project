import React from 'react';

export default function ServiceCard({ icon: Icon, title, description, badge }) {
  const renderIcon = () => {
    if (!Icon) return <span className="text-2xl">🩺</span>;

    // If it's a valid React element already (like <Heart size={32} />)
    if (React.isValidElement(Icon)) {
      return Icon;
    }

    // If it's a string (e.g., emoji '❤️' or '🛡️')
    if (typeof Icon === 'string') {
      return <span className="text-3xl select-none">{Icon}</span>;
    }

    // If it's a component reference (like Lucide Heart)
    if (typeof Icon === 'function' || typeof Icon === 'object') {
      const Component = Icon;
      return <Component size={30} className="text-blue-600" />;
    }

    return <span className="text-2xl">🩺</span>;
  };

  return (
    <div className="h-full bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg border border-blue-50 transition-all duration-300 flex flex-col justify-between text-left group">
      <div>
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-all duration-300 [&_svg]:group-hover:text-white">
          {renderIcon()}
        </div>

        {badge && (
          <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            {badge}
          </span>
        )}

        <h3 className="text-base sm:text-lg font-bold text-[#001f3f] mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
        <span>Clinical Care</span>
        <span className="text-slate-300 group-hover:text-blue-600 transition-colors">✦</span>
      </div>
    </div>
  );
}
