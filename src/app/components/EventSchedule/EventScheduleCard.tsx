import React from "react";
import timeIcon from "@public/icons/time.svg";
import Image from "next/image";

type LongEventScheduleCardProps = {
  title: string;
  time: string;
  className: string;
};

export const LongEventScheduleCard: React.FC<LongEventScheduleCardProps> = ({
  title,
  time,
  className,
}) => {
  return (
    <aside className={className}>
      <div className="bg-white rounded-xl p-8">
        <h1 className="text-3xl text-center font-bold text-[#1E1E1E]">
          {title}
        </h1>
        <p className="text-[#5D5D5D] font-light text-lg flex items-center gap-2 justify-center mt-4">
          <Image src={timeIcon} alt="time" className="w-[20px]" />{" "}
          <span>{time}</span>
        </p>
      </div>
    </aside>
  );
};

type ShortEventScheduleCardProps = {
  title: string;
  time: string;
  duration: string;
  session?: string;
  speaker: string;
  img?: any;
};

export const ShortEventScheduleCard: React.FC<ShortEventScheduleCardProps> = ({
  title,
  time,
  duration,
  session,
  speaker,
  img,
}) => {
  return (
    <aside className="bg-white rounded-xl p-4 h-full">
      <div className="grid lg:grid-cols-3 gap-2">
        <h1 className="text-2xl font-bold text-[#136FDE] lg:col-span-2">
          {session}
        </h1>

        <div>
          <p className="text-[#5D5D5D] font-light flex items-center gap-2 text-sm">
            <Image src={timeIcon} alt="time" className="w-[15px]" />{" "}
            <span className="font-medium">{time}</span>
          </p>

          <p className="text-sm text-[#999999] font-light">{duration}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 mt-6 text-[#5D5D5D]">
        <p className="lg:col-span-2 mr-4">{title}</p>

        <div className="flex items-center gap-1">
          {img ? (
            <Image
              src={img}
              alt="speaker"
              className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]"
            />
          ) : (
            <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]" />
          )}
          <p className="font-medium text-sm">{speaker}</p>
        </div>
      </div>
    </aside>
  );
};
