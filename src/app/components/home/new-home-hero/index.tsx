import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ctaLinks } from "@/data";

const NewHomeHero = () => {
  return (
    <section className="px-4 lg:px-20 bg-devfest-hero pt-10 h-[calc(100vh_-_130px)]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 relative z-10 h-full">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 lg:w-[1000px] mx-auto">
          Welcome to the <strong>Build With AI 2025 Conference!</strong>
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:px-10 mt-5 w-full lg:w-fit">
          <Button
            as={Link}
            href={ctaLinks.calendar.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Add to your Calendar!  <BsArrowUpRight />
          </Button>

          <Button
            as={Link}
            href="/get-dp"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Generate DP!
          </Button>  

          <Button
            as={Link}
            href={ctaLinks.event.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Visit event page! <BsArrowUpRight />
          </Button>

        </div>
      </div>
    </section>
  );
};

export default NewHomeHero;
