import React from "react";
import devfestFrame from "@public/icon/devfest-frame.svg";
import Image from "next/image";

type SectionTitleProps = {
  title: string;
  size?: "lg";
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, size }) => {
  return (
    <div className="flex items-center gap-4 justify-between">
      <h1
        className={`font-semibold text-2xl ${
          size === "lg" ? "text-5xl" : "text-2xl"
        }`}
      >
        {title}
      </h1>
      <Image src={devfestFrame} alt="devfest-frame" className="w-[70%]" />
    </div>
  );
};
export default SectionTitle;
