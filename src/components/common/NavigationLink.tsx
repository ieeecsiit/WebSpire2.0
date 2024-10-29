import React from 'react';

interface NavigationLinkProps {
  href: string;
  label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, label }) => {
  return (
    <a 
      href={href}
      className="self-stretch my-auto hover:text-red-700 transition-colors duration-300"
    >
      {label}
    </a>
  );
}

export default NavigationLink;
