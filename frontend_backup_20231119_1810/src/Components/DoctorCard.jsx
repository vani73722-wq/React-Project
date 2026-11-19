export default function DoctorCard({ photo, name, speciality, experience, phone, timings }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
      <img src={photo} alt={name} className="w-32 h-32 rounded-full object-cover mb-3" />
      <h4 className="font-semibold text-[#0B2F6B]">{name}</h4>
      <p className="text-sm text-[#0B2F6B]">{speciality}</p>
      <p className="text-xs text-gray-500">{experience} years experience</p>
      <p className="text-xs text-gray-500">{phone}</p>
      <p className="text-xs text-gray-500">{timings}</p>
      <div className="mt-3 space-x-2">
        <button className="bg-[#0B2F6B] text-white rounded-full px-3 py-1 text-xs hover:bg-[#1A73E8]">View Profile</button>
        <button className="bg-[#1A73E8] text-white rounded-full px-3 py-1 text-xs hover:bg-[#0B2F6B]">Book Appointment</button>
      </div>
    </div>
  );
}
