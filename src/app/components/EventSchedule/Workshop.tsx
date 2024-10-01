import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import lanyard from "@public/icons/lanyard-white-bg.svg";
import { ctaLinks } from "@/data";

const Workshop: React.FC = () => {
  return (
    <aside
      className="border-4 border-[#1E1E1E] rounded-[25px] p-4"
      style={{
        backgroundColor: "#F8D8D8",
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mt-4 text-black">Day 1</h1>
        <div className="p-2 rounded-full w-fit border-2 border-black text-primary-body capitalize  bg-[#57CAFF]">
          Workshop
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10">
        <Image src={lanyard} alt="lanyard" className="w-[300px] mt-14" />

        <h2
          className="font-bold text-5xl my-8"
          style={{
            color: "#FF7DAF",
            textShadow: "1px 0 black, -1px 0 black, 0 1px black, 0 -1px black",
          }}
        >
          Free
        </h2>

        <div className="flex flex-col justify-center items-center">
          <p className="text-lg text-primary-body">
            Full day of workshop in web, mobile, cloud, Design
          </p>
          <Button
            as="a"
            href={ctaLinks.workshop.link}
            borderRadius={50}
            px={8}
            py={8}
            className="!text-white hover:opacity-80 mt-4 flex items-center gap-2 w-fit"
          >
            Register Now
            <BsArrowUpRight />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Workshop;
