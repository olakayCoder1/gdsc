"use client";

import { useRef, useState } from "react";
import DateAndLocation from "../components/date-and-location";
import CropImage from "../components/crop-image";
import { Button } from "@chakra-ui/react";

const colors = [
  { name: "Blue", value: "blue" },
  { name: "Yellow", value: "yellow" },
  { name: "Pink", value: "pink" },
  { name: "Green", value: "green" },
];

export default function GenerateDpPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | null>("");
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsPreview(!isPreview);
  };

  const getCroppedImage = (cropped_img: string) => {
    setProfilePicture(cropped_img);
  };

  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[800px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Pepper demmm!🥳
        </h1>

        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold">
          Generate and share your unique Devfest Ilorin 2024 DP
        </p>

        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <div className="w-[500px] mx-auto">
          <form noValidate className="space-y-8">
            <input
              className="p-4 rounded-lg w-full outline-none"
              type="text"
              placeholder="Enter name or nickname"
              value={name}
              name="name"
              maxLength={15}
              onChange={(e) => setName(e.target.value)}
            />

            <CropImage onCroppedImage={getCroppedImage} />

            <div className="dp_gen_page__customize_form_group">
              <label className="text-[#999999]">Select preferred color</label>

              <div className="flex items-center justify-between">
                {colors.map((color) => (
                  <div
                    key={color.value}
                    className="mt-2 custom-radio flex items-center gap-2"
                  >
                    <input
                      className="form-check-input"
                      id={`radio-${color.value}`}
                      type="radio"
                      onChange={handleRadioChange}
                      name="color"
                      checked={selectedColor === color.value}
                      value={color.value}
                    />
                    <label
                      htmlFor={`radio-${color.value}`}
                      className={`custom-radio-label ${color.value}`}
                    >
                      {color.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              borderRadius={50}
              py={8}
              type="button"
              disabled={!name || !selectedColor || !profilePicture}
              className="!bg-primary-body !text-white hover:opacity-80 w-full"
            >
              Generate
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
