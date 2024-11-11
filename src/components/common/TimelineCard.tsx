import React from 'react';

interface TimelineCardProps {
  number: number;
  date: string;
  title: string;
  description: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ number, date, title, description }) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-3 items-center w-full rounded-3xl min-w-[280px] max-md:max-w-full max-md:gap-0">
      <div className="flex overflow-hidden flex-col justify-center items-center self-stretch text-3xl font-bold tracking-tighter text-center whitespace-nowrap min-h-[165px] text-neutral-950 w-[82px] max-md:text-lg">
        <div className="flex flex-1 w-0.5 bg-red-700 min-h-[42px]" />
        <div className="flex items-center justify-center overflow-hidden px-8 bg-red-700 h-[82px] w-[82px] rounded-[60px] max-md:h-[60px] max-md:w-[60px] max-md:px-5">
          {number}
        </div>
        <div className="flex flex-1 w-0.5 bg-red-700 min-h-[41px]" />
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch py-3 text-white basis-0 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center p-8 w-full rounded-3xl bg-neutral-800 max-md:px-5 max-md:max-w-full">
          <p className="text-lg tracking-tighter max-md:max-w-full text-red-700 max-md:text-sm">
            {date}
          </p>
          <h3 className="text-2xl font-black tracking-tighter max-md:max-w-full max-md:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-xl tracking-tighter max-md:max-w-full max-md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;
