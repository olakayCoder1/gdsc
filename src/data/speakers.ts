import { Speaker } from "@/types";

import temi from "@public/speakers/temi.png";
import adigbole from "@public/speakers/adigbole.png";
import daniel from "@public/speakers/daniel.png";
import alimi from "@public/speakers/alimi.png";
import areous from "@public/speakers/areous.png";

export const speakers: Speaker[] = [
  // {
  //   image: samson,
  //   name: "Samson Goddy",
  //   role: "Co-Founder OSCA",
  //   day: "conference",
  // },
  {
    image: temi,
    name: "Temi Kolawole",
    role: "Managing Director, Ilorin Innovation Hub",
    day: "keynote",
  },
  {
    image: adigbole,
    name: "Adigbole Osisioni",
    role: "Snr Product Designer, MTN",
    day: "workshop",
  },
  {
    image: daniel,
    name: "Daniel Olowoniyi",
    role: "Software Engineer Alveum",
    day: "workshop",
  },
  {
    image: alimi,
    name: "Qudirah Alimi",
    role: "Machine Learning Engineer, Arebak LLC",
    day: "workshop",
  },
  {
    image: areous,
    name: "Areous Ahmad",
    role: "Lead GDG Ilorin",
    day: "conference",
  },
];
