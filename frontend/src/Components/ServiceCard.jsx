export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <Icon size={32} className="text-[#0B2F6B] mb-3" />
      <h3 className="font-semibold text-[#0B2F6B] mb-2">{title}</h3>
      <p className="text-sm text-[#0B2F6B]">{description}</p>
    </div>
  );
}
