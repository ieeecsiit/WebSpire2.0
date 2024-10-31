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
    <header className="flex overflow-hidden flex-col justify-center px-16 py-6 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <nav className="flex overflow-hidden flex-wrap gap-6 justify-center items-center w-full min-w-[420px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-1 shrink gap-2.5 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <Logo />
        </div>
        <div className="flex overflow-hidden flex-wrap flex-1 shrink justify-center items-center self-stretch my-auto text-xl font-bold tracking-tighter text-white basis-0 min-h-[87px] min-w-[240px] max-md:max-w-ful">
          <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-10 items-center self-stretch my-auto w-full basis-0 min-w-[256px] max-md:max-w-full justify-end">
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