import React from 'react';

function Partners() {
  return (
    <section className="flex overflow-hidden flex-col px-32 py-16 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col w-full text-6xl font-black tracking-tighter text-red-700 max-md:max-w-full max-md:text-4xl">
        <h2 className="overflow-hidden flex-1 shrink gap-2.5 w-full max-md:max-w-full max-md:text-4xl">
          Our Esteemed Partners
        </h2>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-1 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex grow shrink rounded-xl bg-neutral-800 min-h-[575px] min-w-[240px] w-[1340px]" />
      </div>
    </section>
  );
}

export default Partners;