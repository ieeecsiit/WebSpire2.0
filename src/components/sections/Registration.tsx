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
      <div className="flex overflow-hidden flex-wrap gap-8 max-md:gap-4 items-center mt-12 w-full text-xl font-bold tracking-tighter text-center text-white max-md:mt-10 max-md:max-w-full">
        <button
          className="overflow-hidden gap-2.5 self-stretch px-12 py-3 my-auto text-center whitespace-nowrap bg-red-700 border-2 border-red-700 rounded-xl max-md:rounded-lg min-w-[160px] max-md:px-3 max-md:py-2 max-md:min-w-[100px] max-md:text-xs hover:bg-[#cc1a1a] transition-colors"
          aria-label="Download Delegate Booklet"
        >
          Delegate Booklet
        </button>
        <button
          className="overflow-hidden gap-2.5 self-stretch px-12 py-3 my-auto text-center whitespace-nowrap border-2 border-red-700 rounded-xl max-md:rounded-lg min-w-[160px] max-md:px-3 max-md:py-2 max-md:min-w-[100px] max-md:text-xs hover:bg-[#cc1a1a] transition-colors"
          aria-label="Register for WebSpire"
        >
          Register
        </button>
      </div>
    </section>
  );
}

export default Registration;