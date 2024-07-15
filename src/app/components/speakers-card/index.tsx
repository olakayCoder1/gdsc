import React from "react";
import lanyard from "../../../../public/icon/lanyard-white-bg.svg";
import Image, { StaticImageData } from "next/image";

type SpeakersCardProps = {
  image: StaticImageData;
  name: string;
  role: string;
  speakingType: string;
  day: string;
};

const SpeakersCard: React.FC<SpeakersCardProps> = ({
  image,
  name,
  role,
  speakingType,
  day,
}) => {
  return (
    <aside className="border-4 border-black rounded-xl relative">
      <div
        className={`p-2 rounded-full w-fit absolute border-2 border-black top-2 left-2 text-primary-body capitalize ${
          day === "workshop" ? "bg-[#5CDB6D]" : "bg-[#57CAFF]"
        }`}
      >
        {day}
      </div>
      <Image src={image} alt={name} className="lg:w-[500px] rounded-t-lg" />

      <div className="p-4 bg-white overflow-hidden rounded-b-xl">
        <div className="flex items-center justify-between">
          <p className="text-button opacity-50 uppercase">{speakingType}</p>
          <Image src={lanyard} alt="lanyard" className="w-[70%]" />
        </div>

        <h2 className="text-3xl font-bold mt-4 text-black">{name}</h2>
        <p className="font-light text-[14px]">{role}</p>
      </div>
    </aside>
  );
};

export default SpeakersCard;
