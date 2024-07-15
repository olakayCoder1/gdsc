import React from "react";
import {
  InfiniteMovingCards,
  RecapItem,
} from "../../infinite-moving-card/InfiniteMovingCard";
import Recap3Img from "@public/event-recaps/recap_3.svg";
import Recap4Img from "@public/event-recaps/recap_4.svg";
import Recap5Img from "@public/event-recaps/recap_5.svg";
import Recap6Img from "@public/event-recaps/recap_6.svg";
import Recap7Img from "@public/event-recaps/recap_7.svg";
import Recap8Img from "@public/event-recaps/recap_8.svg";
import Recap9Img from "@public/event-recaps/recap_9.svg";

import SectionTitle from "../../section-title";

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

export default function EventRecapSection() {
  return (
    <section className="bg-devfest-markee py-10 space-y-10">
      <div className="px-10 lg:px-20 container mx-auto">
        <SectionTitle title="Previous Devfest Recaps:" />
      </div>

      <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
