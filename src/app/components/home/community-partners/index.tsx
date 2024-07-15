import React from "react";
import SectionTitle from "../../section-title";
import { InfiniteMovingCards } from "../../infinite-moving-card/InfiniteMovingCard";

import gdscalhikma from "@public/community-partners/gdscalhikma.svg";
import gdsckwarapoly from "@public/community-partners/gdsckwarapoly.svg";
import gdsckwasu from "@public/community-partners/gdsckwasu.svg";
import gdscunilorin from "@public/community-partners/gdscunilorin.svg";
import malhub from "@public/community-partners/malhub.svg";

const communityPartners = [
  {
    name: "Partner 1",
    src: gdscalhikma,
  },
  {
    name: "Partner 2",
    src: gdsckwarapoly,
  },
  {
    name: "Partner 3",
    src: gdsckwasu,
  },
  {
    name: "Partner 4",
    src: gdscunilorin,
  },
  {
    name: "Partner 5",
    src: malhub,
  },
];

const CommunityPartners = () => {
  return (
    <section className="bg-[#FFD427] py-10 lg:py-20">
      <div className="px-10 lg:px-20 container mx-auto">
        <SectionTitle title="Community Partners" />
      </div>

      <div className="mt-10 flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={communityPartners}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default CommunityPartners;
