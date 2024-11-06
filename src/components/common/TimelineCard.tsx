import React from 'react';

interface TimelineCardProps {
  number: number;
  date: string;
  title: string;
  description: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ number, date, title, description }) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-3 items-center w-full rounded-3xl min-w-[400px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch text-3xl font-bold tracking-tighter text-center whitespace-nowrap min-h-[165px] text-neutral-950 w-[82px]">
      <div className="flex flex-1 w-0.5 bg-red-700 min-h-[42px]" />
      <div className="flex items-center justify-center overflow-hidden px-8 bg-red-700 h-[82px] rounded-[60px] w-[82px] max-md:px-5">
        {number}
      </div>
      <div className="flex flex-1 w-0.5 bg-red-700 min-h-[41px]" />
    </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch py-1.5 text-white basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center p-8 w-full rounded-3xl bg-neutral-800 max-md:px-5 max-md:max-w-full">
          <p className="text-l tracking-tighter max-md:max-w-full text-red-700">
            {date}
          </p>
          <h3 className="text-2xl font-black tracking-tighter max-md:max-w-full">
            {title}
          </h3>
          <p className="mt-3 text-xl tracking-tighter max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;
