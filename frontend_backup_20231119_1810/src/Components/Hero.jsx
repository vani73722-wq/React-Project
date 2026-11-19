export default function Hero({ tagline, title, description, buttonText, imgUrl, reverse }) {
  return (
    <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center py-16 px-4 md:px-12 bg-[#E6F0FF] relative`}>
      <div className="md:w-1/2 space-y-4">
        <p className="italic text-[#01A73E]">{tagline}</p>
        <h1 className="text-4xl font-bold text-[#0B2F6B]">{title}</h1>
        <p className="text-lg text-[#0B2F6B]">{description}</p>
        <button className="bg-[#0B2F6B] text-white rounded-full px-6 py-3 mt-2 hover:bg-[#01A73E] transition-colors">
          {buttonText}
        </button>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <div className="relative">
          <img src={imgUrl} alt={title} className="rounded-2xl shadow-lg max-w-full h-auto" />
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-[#01A73E] to-[#0B2F6B] rounded-b-2xl" />
        </div>
      </div>
    </section>
  );
}