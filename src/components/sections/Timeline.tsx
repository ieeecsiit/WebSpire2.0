import React from 'react';
import TimelineCard from '../common/TimelineCard';

const timelineData = [
  {
    number: 1,
    date: "23th January - Workshop 01",
    title: "Building Blocks of the Web",
    description: "Mastering HTML and CSS for building foundational web structures"
  },
  {
    number: 2,
    date: "25th January - Workshop 02",
    title: "Designing for Humans",
    description: "UI/UX design principles and essential tools for crafting user-friendly interfaces"
  },
  {
    number: 3,
    date: "03rd February - Workshop 03",
    title: "JavaScript and Frameworks",
    description: "JavaScript and React.js, emphasizing interactive and dynamic web applications"
  },
  {
    number: 4,
    date: "10th February - Exclusive",
    title: "Industry Visit",
    description: "Offers top participants a networking opportunity with industry professionals to gain valuable career insights"
  }
];

function Timeline() {
  return (
    <section id="timeline" className="flex overflow-hidden flex-wrap gap-12 content-start items-start px-32 py-16 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col flex-1 shrink pt-10 basis-0 max-w-[641px] min-w-[320px] max-md:max-w-full">
        <h2 className="text-6xl font-black tracking-tighter text-red-700 max-md:max-w-full max-md:text-4xl">
          Timeline
        </h2>
        <p className="mt-3 text-xl tracking-tighter text-white max-md:max-w-full">
          The workshop series will span 3-4 weeks, with sessions scheduled weekly to provide ample time for hands-on practice and skill development.
        </p>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink basis-0 min-w-[320px] max-md:max-w-full">
        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            number={item.number}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Timeline;