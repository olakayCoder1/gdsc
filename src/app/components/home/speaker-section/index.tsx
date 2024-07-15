import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import SectionTitle from "../../section-title";
import SpeakersCard from "../../speakers-card";
import speakers from "@/speakers";

export default function SpeakerSection() {
  return (
    <section className="bg-[#F0F0F0] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle title="Our speakers" size="lg" />

        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          {speakers.slice(0, 3).map((speaker, index) => (
            <SpeakersCard {...speaker} key={index} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4 justify-end">
          <Button
            variant="outline"
            borderRadius={50}
            px={10}
            py={8}
            className="border !border-primary-body !text-primary-body hover:opacity-80"
          >
            Apply to speak
          </Button>

          <Button
            as={Link}
            href="/speakers"
            borderRadius={50}
            px={10}
            py={8}
            className="!bg-primary-body !text-white hover:opacity-80"
          >
            View All <BsArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
