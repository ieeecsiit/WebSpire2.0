import React from 'react';

function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col justify-center px-32 py-14 w-full text-xl tracking-tighter bg-neutral-950 min-h-[358px] max-md:px-5 max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58f536eeb63bff187c0dc9e35aed142aeee5b69a7a32b542e0f89b2805fd7f62?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" 
        alt="Footer decoration" 
        className="object-contain max-w-full w-[1680px]" 
      />
      <div className="flex overflow-hidden flex-wrap gap-6 items-start mt-12 w-full h-[126px] min-w-[420px] max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink text-white basis-0 min-h-[261px] min-w-[240px] max-md:max-w-full">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f53c7678bea5aff82cd67feda37489fba4e945dc7dd9c8e0a617dfb2e9cd2b5?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" 
            alt="WebSpire Logo" 
            className="object-contain max-w-full aspect-[11.36] w-[365px]" 
          />
          <div className="mt-2.5 max-md:max-w-full">
            Organized by IEEE Computer Society SBC of IIT
          </div>
        </div>
        <div className="flex overflow-hidden flex-col flex-1 shrink font-black text-right text-red-700 whitespace-nowrap basis-0 min-w-[240px] max-md:max-w-full">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9ff9f76a0708df18b37e3b99b6989df053148e17732ab247dcb0ddd54478b8?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" 
            alt="IEEE CS Logo" 
            className="object-contain self-end max-w-full rounded-none aspect-[5.85] w-[292px]" 
          />
          <div className="overflow-hidden flex-1 shrink gap-2.5 mt-6 w-full max-md:max-w-full">
            ieeecs@iit.ac.lk
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-6 items-start mt-12 w-full text-center text-white min-w-[420px] max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-6 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="overflow-hidden flex-1 shrink gap-1 self-stretch my-auto w-full min-w-[256px] max-md:max-w-full">
            Copyright 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;