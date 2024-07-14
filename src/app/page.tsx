'use client'

import Image from "next/image";
import Link from "next/link";
import { Button, } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

import ConfettiContainer from "./components/confetti/ConfettiContainer";
import NavMenu from "./components/menu/NavMenu";

import GdgLogo from "@public/gdg-logo.svg"

import ArrowIcon from "@public/icon/arrow.svg"
import DoubeUIcon from "@public/icon/double-u.svg"
import GlobeIcon from "@public/icon/globe.svg"
import StarIcon from "@public/icon/star.svg"
import { InfiniteMovingCards, RecapItem } from "./components/infinite-moving-card/InfiniteMovingCard";

import Recap3Img from '@public/event-recaps/recap_3.svg'
import Recap4Img from '@public/event-recaps/recap_4.svg'
import Recap5Img from '@public/event-recaps/recap_5.svg'
import Recap6Img from '@public/event-recaps/recap_6.svg'
import Recap7Img from '@public/event-recaps/recap_7.svg'
import Recap8Img from '@public/event-recaps/recap_8.svg'
import Recap9Img from '@public/event-recaps/recap_9.svg'

const testimonials: RecapItem[] = [
  {
    name: "Event Recap 3",
    src: Recap3Img,
  },
  {
    name: "Event Recap 4",
    src: Recap4Img,
  },
  {
    name: "Event Recap 5",
    src: Recap5Img,
  },
  {
    name: "Event Recap 6",
    src: Recap6Img,
  },
  {
    name: "Event Recap 7",
    src: Recap7Img,
  },
  {
    name: "Event Recap 8",
    src: Recap8Img,
  },
  {
    name: "Event Recap 9",
    src: Recap9Img,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[300px] bg-devfest-hero w-full px-10 lg:px-0">
        <div className="lg:min-w-[1200px] mx-auto flex justify-center">
          <NavMenu currentPath={'home'} />
        </div>

        <div className="lg:mt-[100px] flex flex-col items-center justify-center gap-2 z-10">
          <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
            Devfest Ilorin
          </h1>
          <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
            2024
          </h1>
          <p className="text-wrap text-center lg:max-w-[912px] text-[18px] text-primary-gray">
            Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of inspiring talks, interactive workshops, and unparalleled networking opportunities.
            With over 2,000 attendees, this event is your gateway to the latest in AI, Android, Cloud, and more.
            Don’t miss out on Ilorin&apos;s largest tech celebration of the year!
          </p>

          <div className="flex flex-col lg:flex-row justify-between gap-5 px-10 lg:px-10 mt-5">
            <Button borderRadius={50} px={10} py={8}>
              Register Now <BsArrowUpRight />
            </Button>
            <Button variant={'outline-black'} borderRadius={50} px={10} py={8}>
              Apply to Speak
            </Button>
          </div>
        </div>

        <ConfettiContainer />
      </div>

      <div className="bg-devfest-markee w-full">
        <div className="flex flex-row justify-center px-10 py-10">
          <div className="flex flex-row items-center gap-3 flex-wrap">
            <h1 className="font-semibold text-2xl">Previous Devfest Recaps: </h1>
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Image
                src={GdgLogo}
                alt={""}
                className="h-[24px] w-[24px] lg:h-[48px] lg:w-[48px] contain-content"
              />
              <p>Google Developer Groups Ilorin</p>
              <Image
                src={StarIcon}
                alt={""}
                className="h-[14px] w-[14px] lg:h-[24px] lg:w-[24px] contain-content"
              />
              <Image
                src={ArrowIcon}
                alt={""}
                className="h-[16px] lg:h-[24px] w-auto contain-content"
              />
              <Image
                src={GlobeIcon}
                alt={""}
                className="h-[24px] w-auto contain-content"
              />
              <Image
                src={DoubeUIcon}
                alt={""}
                className="h-[16px] lg:h-[24px] w-auto contain-content"
              />
              <Image
                src={StarIcon}
                alt={""}
                className="h-[14px] w-[14px] lg:h-[24px] lg:w-[24px] contain-content"
              />
            </div>
          </div>
        </div>
      
        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div>

        </div>
      </div>
    </>
  );
}
