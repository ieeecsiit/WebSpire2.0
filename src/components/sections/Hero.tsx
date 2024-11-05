import React from 'react';

const techIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fb27639b1cac73e15fe44a83e7277441cfa43214f5985407e91e3abb1e38761?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "React Icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0338fea1762602217e5306275a857ab0d86d4227a736284dd7519cade1d6bccd?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "JavaScript Icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa57a1bddafbca66831375106a9abb27a954dea5dcb9ae358d6f96226c96e685?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "HTML5 Icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dcda49343e80343ce8d9877b4ff89f9802f46ba545b2625add19a9942fdf6815?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d", alt: "CSS3 Icon" }
];

function Hero() {
  return (
    <section className="flex overflow-hidden justify-center items-center w-full bg-neutral-950 min-h-[680px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 max-w-[816px] min-w-[420px] w-[816px] max-md:max-w-full">
        <h1 className="overflow-hidden w-full text-2xl tracking-tighter text-center text-white max-md:max-w-full">
          Shaping future web innovators by bridging the gap between foundational skills and cutting-edge front-end development
        </h1>
        <div className="flex gap-6 justify-center items-center self-center mt-32 max-w-full w-[312px] max-md:mt-10">
          {techIcons.map((icon, index) => (
            <img
              key={index}
              loading="lazy"
              src={icon.src}
              alt={icon.alt}
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;