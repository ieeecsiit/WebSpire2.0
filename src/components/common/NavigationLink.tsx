import React from 'react';

interface NavigationLinkProps {
  href: string;
  label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, label }) => {
  return (
    <a 
      href={href}
      className="self-stretch my-auto hover:text-[#cc1a1a] transition-colors"
    >
      {label}
    </a>
  );
}

export default NavigationLink;
