import React from "react";
import {
  InfiniteMovingCards,
} from "@component/infinite-moving-card/InfiniteMovingCard";
import SectionTitle from "@component/section-title";
import { eventRecapShots } from "@/data";

export default function EventRecapSection() {
  return (
    <section className="bg-devfest-markee py-10 space-y-10">
      <div className="px-10 lg:px-20 container mx-auto">
        <SectionTitle title="Previous Devfest Recaps:" />
      </div>

      <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={eventRecapShots}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
