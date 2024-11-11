import React from 'react';
import ContactCard from '../common/ContactCard';

const contactData = [
  {
    name: "Sasindu Janapriya",
    role: "Project Chairperson",
    phone: "+94 70 417 2884",
    email: "sasindu.20230130@iit.ac.lk"
  },
  {
    name: "Mayuran Thanushan",
    role: "Project Vice-Chairperson",
    phone: "+94 72 375 5252",
    email: "mayuran.20231047@iit.ac.lk"
  }
];

function Contact() {
  return (
    <section id="contact" className="flex overflow-hidden flex-wrap gap-12 content-center items-center px-32 py-16 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[420px] max-md:max-w-full">
        <h2 className="overflow-hidden flex-1 shrink gap-2.5 w-full text-6xl font-black tracking-tighter text-red-700 max-md:max-w-full max-md:text-4xl">
          Contact Us
        </h2>
        <div className="flex overflow-hidden flex-wrap gap-6 items-start pt-12 mt-6 w-full max-md:max-w-full">
          {contactData.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;