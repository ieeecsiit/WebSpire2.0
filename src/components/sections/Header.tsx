import React from 'react';
import Logo from '../common/Logo';
import NavigationLink from '../common/NavigationLink';
import RegisterButton from '../common/RegistrationButton';

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact Us', href: '#contact' }
];

function Header() {
  return (
    <header className="flex items-center justify-between mt-2 px-6 py-4 w-full bg-neutral-950 text-white">
      <div className="flex items-center">
        <Logo />
      </div>
      <nav className="flex items-center gap-6 text-lg">
        <div className="hidden md:flex gap-4">
          {navigationItems.map((item, index) => (
            <NavigationLink key={index} href={item.href} label={item.label} />
          ))}
        </div>
        <div className="flex items-center">
          <RegisterButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
