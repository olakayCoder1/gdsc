"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import CropImage from "../components/crop-image";
import DateAndLocation from "../components/date-and-location";

import blueImage from "@public/dp/blue.jpg";
import yellowImage from "@public/dp/yellow.jpg";
import redImage from "@public/dp/red.jpg";
import greenImage from "@public/dp/green.jpg";

const colors = [
  { name: "Blue", value: "blue", image: blueImage.src },
  { name: "Yellow", value: "yellow", image: yellowImage.src },
  { name: "Red", value: "red", image: redImage.src },
  { name: "Green", value: "green", image: greenImage.src },
];

export default function GenerateDpPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const [textX, setTextX] = useState(250);
  const [textY, setTextY] = useState(470);

  const handleSubmit = () => {
    if (canvasRef.current && profilePicture && selectedColor) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const dpr = window.devicePixelRatio || 1;
        const width = 500;
        const height = 500;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, width, height);

        const backgroundImage = new Image();
        backgroundImage.src =
          colors.find((color) => color.value === selectedColor)?.image || "";

        backgroundImage.onload = () => {
          ctx.drawImage(backgroundImage, 0, 0, width, height);

          const profileImage = new Image();
          profileImage.src = profilePicture;

          profileImage.onload = () => {
            const cornerRadius = 10;

            const profilePicX = 55;
            const profilePicY = 127;

            const profilePicWidth = 185;
            const profilePicHeight = 203;

            const x = profilePicX;
            const y = profilePicY;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x + cornerRadius, y);
            ctx.lineTo(x + profilePicWidth - cornerRadius, y);
            ctx.arc(
              x + profilePicWidth - cornerRadius,
              y + cornerRadius,
              cornerRadius,
              -Math.PI / 2,
              0
            );
            ctx.lineTo(
              x + profilePicWidth,
              y + profilePicHeight - cornerRadius
            );
            ctx.arc(
              x + profilePicWidth - cornerRadius,
              y + profilePicHeight - cornerRadius,
              cornerRadius,
              0,
              Math.PI / 2
            );
            ctx.lineTo(x + cornerRadius, y + profilePicHeight);
            ctx.arc(
              x + cornerRadius,
              y + profilePicHeight - cornerRadius,
              cornerRadius,
              Math.PI / 2,
              Math.PI
            );
            ctx.lineTo(x, y + cornerRadius);
            ctx.arc(
              x + cornerRadius,
              y + cornerRadius,
              cornerRadius,
              Math.PI,
              -Math.PI / 2
            );
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(
              profileImage,
              x,
              y,
              profilePicWidth,
              profilePicHeight
            );
            ctx.restore();

            // Draw the name
            ctx.font = "bold 24px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(name, textX, textY);
          };
        };
      }
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
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
        <div className="grid grid-cols-2 gap-10">
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

            <CropImage onCroppedImage={setProfilePicture} />

            <div>
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
              className="!bg-primary-body !text-white hover:opacity-80 w-full disabled:!bg-gray-400"
            >
              Generate
            </Button>
          </form>

          <div className="dp-preview">
            <canvas
              ref={canvasRef}
              style={{
                border: "2px solid #ccc",
                width: "500px",
                height: "500px",
              }}
            ></canvas>
          </div>
        </div>
      </section>
    </div>
  );
}
