"use client";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import EventRecapSection from "./components/home/event-recap/EventRecap";
import SpeakerSection from "./components/home/speaker-section";
import SectionTitle from "./components/section-title";

import sponsor1 from "@public/sponsors/sponsor-1.png";
import venue from "@public/venue.png";

import CommunityPartners from "./components/home/community-partners";
import HomeHero from "./components/home/home-hero";
import partner1 from "@public/partners/partner-1.png";
import partner2 from "@public/partners/partner-2.png";
import partner3 from "@public/partners/partner-3.png";
import Schedule from "./components/schedule";
import Link from "next/link";
import { ctaLinks } from "@/data";

const sponsors = [sponsor1];
const partners = [partner1, partner2, partner3];

export default function Home() {
  return (
    <>
      <HomeHero />

      <EventRecapSection />

      <SpeakerSection />

      <section className="bg-[#C3ECF6] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Venue" size="lg" />

          <div className="mt-10">
            <h2 className="text-wrap text-center mb-6 text-2xl lg:text-4xl font-extrabold tracking-tight leading-none text-gray-900">
              Diamond Arena ( Diamond Park ), <br className="hidden lg:block" />{" "}
              Ilorin, Kwara State.
            </h2>

            <Image src={venue} alt="venue" />
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              as={Link}
              href={ctaLinks.register.link}
              target="_blank"
              borderRadius={50}
              px={10}
              py={8}
              className="!bg-[#33A852] !text-white hover:opacity-80"
            >
              Register Now <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#CCF6C5] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Sponsors" size="lg" />

          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {sponsors.map((sponsor, index) => (
              <Image src={sponsor} key={index} alt={`sponsor-${index}`} />
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Button
              as={Link}
              href={ctaLinks.sponsor.link}
              target="_blank"
              borderRadius={50}
              px={10}
              py={8}
              className="!bg-primary-body !text-white hover:opacity-80"
            >
              Sponsor Us <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFE7A5] py-10 lg:py-20">
        <div className="px-4 lg:px-20 container mx-auto">
          <SectionTitle title="Partners" size="lg" />

          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {partners.map((partner, index) => (
              <Image src={partner} key={index} alt={`sponsor-${index}`} />
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Button
              as={Link}
              href={ctaLinks.partner.link}
              target="_blank"
              borderRadius={50}
              px={10}
              py={8}
              className="!bg-primary-body !text-white hover:opacity-80"
            >
              Partner with Us <BsArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <CommunityPartners />

      <Schedule />
    </>
  );
}
