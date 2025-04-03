export interface Speaker {
  image: string | StaticImageData;
  name: string;
  role: string;
  day: "Virtual Speaker" | "In-person" | "panelist" | "keynote";
}
