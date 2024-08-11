import React from "react";
import SectionTitle from "@component/section-title";
import { InfiniteMovingCards } from "@component/infinite-moving-card/InfiniteMovingCard";

import part1 from "@public/community-partners/partner-1.png";
import part2 from "@public/community-partners/partner-2.png";
import part3 from "@public/community-partners/partner-3.png";
import part4 from "@public/community-partners/partner-4.png";
import part5 from "@public/community-partners/partner-5.png";
import part6 from "@public/community-partners/partner-6.png";
import part7 from "@public/community-partners/partner-7.png";
import part8 from "@public/community-partners/partner-8.png";
import part9 from "@public/community-partners/partner-9.png";
import part10 from "@public/community-partners/partner-10.png";
import part11 from "@public/community-partners/partner-11.png";

const communityPartners = [
  {
    name: "Partner 1",
    src: part1,
  },
  {
    name: "Partner 2",
    src: part2,
  },
  {
    name: "Partner 3",
    src: part3,
  },
  {
    name: "Partner 4",
    src: part4,
  },
  {
    name: "Partner 5",
    src: part5,
  },
  {
    name: "Partner 6",
    src: part6,
  },
  {
    name: "Partner 7",
    src: part7,
  },
  {
    name: "Partner 8",
    src: part8,
  },
  {
    name: "Partner 9",
    src: part9,
  },
  {
    name: "Partner 10",
    src: part10,
  },
  {
    name: "Partner 11",
    src: part11,
  },
];

const CommunityPartners = () => {
  return (
    <section className="bg-[#FFD427] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle title="Community Partners" />
      </div>

      <div className="mt-10 flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={communityPartners}
          direction="right"
          speed="slow"
          render
        />
      </div>
    </section>
  );
};

export default CommunityPartners;
