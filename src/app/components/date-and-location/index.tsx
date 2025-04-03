import React from "react";

import layer from "@public/icons/dates_lanyard.svg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { ctaLinks } from "@/data";

const DateAndLocation = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-8">
      <aside className="bg-[#34A853] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-white space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 1</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">Tuesday, April 08</h2>
          <p className="text-lg font-semibold">
            Google Meet 📍
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.calendar.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#34A853] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Set Reminder <BsArrowUpRight />
        </Button>
      </aside>

      <aside className="bg-[#FF7DAF] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-white space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 2</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">Thursday, April 10</h2>
          <p className="text-lg font-semibold">
            Google Meet 📍
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.calendar.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#FF7DAF] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Set Reminder <BsArrowUpRight />
        </Button>
      </aside>

      <aside className="bg-[#FFE7A5] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-black space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 3</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">Friday, April 11</h2>
          <p className="text-lg font-semibold">
            Google Meet 📍
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.calendar.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#000] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Set Reminder <BsArrowUpRight />
        </Button>
      </aside>

      <aside className="bg-[#136FDE] border-4 border-primary-body rounded-xl p-4 w-full min-h-[200px] text-white space-y-5">
        <div className="flex items-center justify-between">
          <p className="">Day 4 | Main Event</p>
          <Image src={layer} alt="layer" className="lg:w-[200px]" />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-3xl">Friday, April 11</h2>
          <p className="text-lg font-semibold">
            Ilorin Innovation Hub 📍
          </p>
        </div>

        <Button
          as={Link}
          href={ctaLinks.calendar.link}
          target="_blank"
          borderRadius={50}
          py={7}
          className="!bg-white !text-[#136FDE] hover:opacity-80 flex items-center gap-2 !font-bold"
        >
          Mark Calendar <BsArrowUpRight />
        </Button>
      </aside>
    </div>
  );
};

export default DateAndLocation;
