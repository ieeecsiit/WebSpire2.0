import React from 'react';

function About() {
  return (
    <section id="about" className="flex overflow-hidden gap-10 items-start px-32 py-16 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="overflow-hidden flex-1 shrink pt-10 text-6xl font-black tracking-tighter text-red-700 max-w-[641px] min-w-[320px] max-md:max-w-full max-md:text-4xl">
        About WebSpire 2.0
      </div>
      <div className="flex overflow-hidden flex-col min-w-[240px] w-[1121px] max-md:max-w-full">
        <div className="text-xl tracking-tighter text-white max-md:max-w-full">
          The workshop series empowers participants to elevate their web development skills through a blend of theory and hands-on practice. It begins with the fundamentals of HTML and CSS for structuring web pages, progressing to JavaScript for interactivity and React.js for building dynamic applications. Emphasizing responsive design, the series covers modern tools like Git, developer tools, and CSS frameworks such as Bootstrap or Tailwind CSS.
          <br /><br />
          Participants will also learn essential UI/UX principles for crafting user-friendly interfaces. By the end, they will have a portfolio showcasing interactive and responsive projects, along with insights into industry best practices and emerging trends.
        </div>
        <div className="flex gap-6 items-center self-start mt-6">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/574054f998e40f24d7c9554f7c128710ec9451fb7ce7fa8a37a9d0b61f9268dc?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" alt="HTML5" className="object-contain shrink-0 self-stretch my-auto aspect-[0.87] w-[52px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c492845c980ed0057027223bfbbc678676aca5fcd8c83814646e6f33782df5fa?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" alt="CSS3" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce303d2667ed1c457af1531b36c71deb6f1e6734da022a47ce1ec909bc79aa94?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" alt="JavaScript" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0d1e0b67ec6c13ecc80957376c703b5b060b224a079be514682beb4c26479ae?placeholderIfAbsent=true&apiKey=0a18f12c55274af68e0a3ae651c1ff6d" alt="React" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-[0.67]" />
        </div>
      </div>
    </section>
  );
}

export default About;