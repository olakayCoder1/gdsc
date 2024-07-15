import React from "react";
import devfestFrame from "@public/devfest-lanyard.png";
import Image from "next/image";

type SectionTitleProps = {
  title: string;
  size?: "lg";
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, size }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
      <h1
        className={`font-semibold text-2xl ${
          size === "lg" ? "text-2xl lg:text-5xl" : "text-2xl"
        }`}
      >
        {title}
      </h1>
      <Image src={devfestFrame} alt="devfest-frame" className="lg:w-[70%]" />
    </div>
  );
};
export default SectionTitle;
