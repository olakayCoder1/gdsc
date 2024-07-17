import React from "react";

import layer from "@public/icon/dates_lanyard.svg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

const DateAndLocation = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-4">
      <aside className="bg-button border-4 border-primary-body rounded-xl p-4 w-full lg:w-[380px] min-h-[200px] text-white space-y-4">
        <div className="flex items-center justify-between">
          <p className="">Dates</p>
          <Image src={layer} alt="layer" />
        </div>

        <h2 className="font-bold text-4xl">October 17 - 19</h2>

        <Button
          borderRadius={50}
          px={10}
          py={8}
          className="!bg-white !text-button hover:opacity-80"
        >
          Register Now <BsArrowUpRight />
        </Button>
      </aside>

      <aside className="bg-primary-body border-4 border-primary-body rounded-xl p-4 w-full lg:w-[380px] text-white space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-button">Location</p>
          <Image src={layer} alt="layer" />
        </div>

        <h2 className="font-bold text-3xl">
          Diamond Arena ( Diamond Park ), Ilorin, Kwara State.
        </h2>
      </aside>
    </div>
  );
};

export default DateAndLocation;
