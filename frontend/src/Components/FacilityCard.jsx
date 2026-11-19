export default function FacilityCard({ imgUrl, icon: Icon, title }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute top-2 left-2 bg-white rounded-full p-2 shadow">
        <Icon size={24} className="text-[#0B2F6B]" />
      </div>
      <div className="bg-white py-2 text-center">
        <h4 className="font-medium text-[#0B2F6B]">{title}</h4>
      </div>
    </div>
  );
}
