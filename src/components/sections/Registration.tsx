import React from 'react';

function Registration() {
  return (
    <section className="flex overflow-hidden flex-col px-32 py-16 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 text-6xl font-black tracking-tighter text-red-700 whitespace-nowrap max-w-[1060px] w-[1060px] max-md:max-w-full max-md:text-4xl">
          Registration
        </h2>
        <div className="mt-6 text-xl tracking-tighter text-white max-md:max-w-full">
          Join the Webspire workshop series and embark on a journey to elevate your web development skills. Open to aspiring developers, students, and tech enthusiasts, the program offers a structured learning path from basic concepts to advanced techniques in front-end development.
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><span className="font-bold">Eligibility:</span> The workshops are designed for individuals of all skill levels, whether you're starting out or looking to refine your expertise.</li>
            <li><span className="font-bold">Fees:</span> Free for all participants.</li>
            <li><span className="font-bold">Inclusions:</span> Registration covers access to all workshop sessions, materials, and exclusive opportunities for top participants.</li>
          </ul>
          <br />
          Secure your spot today and gain hands-on experience, network with industry professionals, and take a step closer to a future in web development. Limited seats available—register now to not miss out!
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-8 items-center mt-12 w-full text-xl font-bold tracking-tighter text-center text-white max-md:mt-10 max-md:max-w-full">
        <button
          className="overflow-hidden flex-1 shrink gap-2.5 self-stretch p-4 my-auto max-w-[200px] text-center whitespace-nowrap rounded-xl border-2 border-red-700 border-solid min-w-[160px] max-md:px-3 hover:bg-red-700 transition-colors"
          aria-label="Download Delegate Booklet"
        >
          Delegate Booklet
        </button>
        <button
          className="overflow-hidden flex-1 shrink gap-2.5 self-stretch p-4 my-auto max-w-[200px] text-center whitespace-nowrap bg-red-700 border-2 border-red-700 rounded-xl min-w-[160px] max-md:px-3 hover:bg-[#0a0b0c] hover:border-red-700 transition-colors"
          aria-label="Register for WebSpire"
        >
          Register
        </button>
      </div>
    </section>
  );
}

export default Registration;