export interface Speaker {
  image: string | StaticImageData;
  name: string;
  role: string;
  day: "workshop" | "panelist" | "keynote" | "breakout" | "virtual";
}
