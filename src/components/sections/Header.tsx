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
    <header className="flex overflow-hidden flex-col justify-center px-12 py-6 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <nav className="flex overflow-hidden flex-wrap gap-4 md:gap-0 justify-center items-center w-full min-w-[420px] max-md:max-w-full">
        <div className="flex flex-1 shrink-0 gap-2.5 items-center my-0 min-w-[120px] max-md:max-w-full">
          <Logo />
        </div>
        <div className="flex flex-1 shrink-0 justify-center items-center text-xl font-bold tracking-tighter text-white basis-0 min-w-[300px] max-md:max-w-full">
          <div className="flex flex-1 shrink gap-6 items-center justify-end w-full min-w-[200px] max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:gap-3">
            {navigationItems.map((item, index) => (
              <NavigationLink key={index} href={item.href} label={item.label} />
            ))}
            <RegisterButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;