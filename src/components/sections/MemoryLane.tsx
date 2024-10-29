import React from 'react';

function MemoryLane() {
  return (
    <section className="flex overflow-hidden flex-col py-16 w-full bg-neutral-950 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col px-32 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 text-6xl font-black tracking-tighter text-red-700 max-w-[1060px] w-[1060px] max-md:max-w-full max-md:text-4xl">
          Memory Lane
        </h2>
        <div className="mt-6 text-xl tracking-tighter text-white max-md:max-w-full">
          The inaugural Webspire laid the foundation for aspiring web developers by offering a blend of awareness, hands-on learning, and practical application. The program featured an awareness session that introduced participants to the latest trends and career opportunities in web development. This was followed by an online workshop that covered essential front-end skills, setting the stage for more advanced topics.
          <br /><br />
          The highlight of Webspire was the in-depth physical workshop, which focused on React.js, one of the most popular libraries for building dynamic user interfaces. Attendees gained valuable insights into React's component-based architecture, state management, and best practices for creating interactive web applications. Webspire successfully empowered participants to kickstart their journey into modern web development with a strong focus on React.js.
        </div>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-1 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-1 shrink w-full rounded-xl basis-0 bg-neutral-800 min-h-[575px] min-w-[240px] max-md:max-w-full" />
      </div>
    </section>
  );
}

export default MemoryLane;