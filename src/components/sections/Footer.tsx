import React from 'react';

const techIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb27639b1cac73e15fe44a83e7277441cfa43214f5985407e91e3abb1e38761?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "Instagram", href: "https://www.instagram.com/ieeecs_iit/" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0338fea1762602217e5306275a857ab0d86d4227a736284dd7519cade1d6bccd?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "Facebook", href: "https://www.facebook.com/IEEECSIIT" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa57a1bddafbca66831375106a9abb27a954dea5dcb9ae358d6f96226c96e685?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "LinkedIn", href: "https://www.linkedin.com/company/ieee-computer-society-student-chapter-of-iit/" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dcda49343e80343ce8d9877b4ff89f9802f46ba545b2625add19a9942fdf6815?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "TikTok", href: "https://www.tiktok.com/@ieeecsiit" }
];

function Footer() {
  return (
    <footer className="flex flex-col justify-center px-32 py-14 w-full text-xl tracking-tighter bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <hr className="border-t border-gray-300 w-full max-w-[1680px]" />
      
      {/* Main Section - Logo, Icons and Contact Info */}
      <div className="flex flex-wrap gap-6 items-center justify-between max-lg:justify-center mt-12 w-full h-auto min-w-full max-md:mt-10 max-md:flex-col max-md:max-w-full">
        
        {/* Logo Section */}
        <div className="flex flex-col justify-start items-center text-white min-h-full min-w-[240px] max-md:max-w-full max-md:text-center">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f53c7678bea5aff82cd67feda37489fba4e945dc7dd9c8e0a617dfb2e9cd2b5?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" 
            alt="WebSpire Logo" 
            className="object-contain max-w-full aspect-[11.36] w-[365px] max-md:w-[260px]" 
          />
          <div className="mt-2.5 max-md:max-w-full max-md:text-sm">
            Organized by IEEE Computer Society SBC of IIT
          </div>
        </div>
        
        {/* Social Media Icons Section */}
        <div className="flex flex-col items-center text-right text-red-700 whitespace-nowrap basis-0 min-w-[240px] max-md:max-w-full max-md:text-center max-lg:mt-4">
          <div className="flex gap-4 justify-center">
            {techIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
              >
                <img
                  loading="lazy"
                  src={icon.src}
                  alt={icon.alt}
                  className="object-contain w-10 h-10 transition-transform duration-200 hover:opacity-80 max-md:w-6 max-md:h-6"
                />
              </a>
            ))}
          </div>
          <div className="mt-2 mr-1 text-red-700 max-md:text-sm"> 
            <a href='mailto:ieeecs@iit.ac.lk'>
              ieeecs@iit.ac.lk
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex gap-6 items-center mt-12 w-full text-center text-white min-w-full max-md:mt-10 max-md:max-w-full max-md:text-center">
        <div className="flex flex-wrap flex-1 shrink gap-6 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="overflow-hidden flex-1 shrink gap-1 self-stretch my-auto w-full min-w-[256px] max-md:max-w-full max-md:text-sm opacity-60">
            Copyright 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
