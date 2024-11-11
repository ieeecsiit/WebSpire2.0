import React from 'react';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, role, phone, email }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink basis-0 min-w-[256px] max-md:max-w-full">
      <div className="flex flex-col pb-6 w-full max-md:max-w-full">
        <h3 className="text-3xl font-bold tracking-tighter text-white max-md:max-w-full">
          {name}
        </h3>
        <div className="text-xl tracking-tighter text-red-700 max-md:max-w-full">
          {role}
        </div>
      </div>
      <div className="flex flex-col items-start pr-20 w-full text-xl tracking-tighter text-white rounded-none max-md:pr-5 max-md:max-w-full">
        <a href={`tel:${phone}`} className="hover:text-red-700 transition-colors">
          {phone}
        </a>
        <a href={`mailto:${email}`} className="hover:text-red-700 transition-colors">
          {email}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
