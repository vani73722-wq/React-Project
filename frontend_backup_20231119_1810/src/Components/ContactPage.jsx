import React from 'react';
import Hero from './Hero';
import ContactInfoCard from './ContactInfoCard';

function ContactPage() {
  // ----- CONTENT -----
  const tagline = '📞 Get in Touch';
  const title = 'Contact Us';
  const description = 'We are here to answer any questions you may have.';
  const buttonText = 'Send Message';
  const imgUrl = '/contact.jpg'; // place a bright hospital picture in public folder

  return (
    <div className="py-12 px-4 md:px-12 bg-[#F5F8FF]">
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        buttonText={buttonText}
        imgUrl={imgUrl}
        reverse={true}
      />

      <section className="mt-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side – info cards */}
        <div className="space-y-4">
          <ContactInfoCard icon="📍" title="Location" detail="Sivakasi, Tamil Nadu, India" />
          <ContactInfoCard icon="📞" title="Phone" detail="+91 12345 67890" />
          <ContactInfoCard icon="✉️" title="Email" detail="info@nairahospital.com" />
          <ContactInfoCard icon="🕑" title="Working Hours" detail="Mon‑Fri: 8am‑8pm" />
        </div>

        {/* Right side – contact form */}
        <div className="bg-[#FFFFFF] rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-[#0B2F6B]">Send Us a Message</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-2xl px-4 py-2 h-32"
            />
            <button
              type="submit"
              className="w-full bg-[#0B2F6B] text-[#FFFFFF] rounded-full py-2 hover:bg-[#01A73E]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
