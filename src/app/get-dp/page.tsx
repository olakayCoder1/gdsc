"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import DpForm from "../components/dp/dp-form";
import DpCanvas from "../components/dp/dp-canvas";
// import DateAndLocation from "../components/date-and-location";
// import blueImage from "@public/dp/blue.jpg";
// import yellowImage from "@public/dp/yellow.jpg";
// import redImage from "@public/dp/red.jpg";
// import greenImage from "@public/dp/green.jpg";
import whiteImage from "@public/dp/getdp.svg";

const colors = [
  // { name: "Blue", value: "blue", image: blueImage.src },
  // { name: "Yellow", value: "yellow", image: yellowImage.src },
  // { name: "Red", value: "red", image: redImage.src },
  // { name: "Green", value: "green", image: greenImage.src },
  { name: "White", value: "white", image: whiteImage.src },
];

export default function GetDpPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("white");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const generate = useCallback(() => {
    if (canvasRef.current && selectedColor) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const containerWidth = canvas.clientWidth;
        const dpr = window.devicePixelRatio || 1;

        const width = containerWidth;
        const height = width;
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

          if (profilePicture) {
            const profileImage = new Image();
            profileImage.src = profilePicture;
          
            profileImage.onload = () => {
              const profilePicX = width * 0.75;  // Center X position
              const profilePicY = height * 0.34;  // Center Y position
              const radius = width * 0.16;  // Circle radius (half of your 0.32 width)
            
              const imgWidth = profileImage.width;
              const imgHeight = profileImage.height;
            
              const scale = Math.max(
                (radius * 2) / imgWidth,
                (radius * 2) / imgHeight
              );
              const scaledWidth = imgWidth * scale;
              const scaledHeight = imgHeight * scale;
            
              const x = profilePicX - scaledWidth / 2;  // Center the image
              const y = profilePicY - scaledHeight / 2;  // Center the image
            
              ctx.save();
              ctx.beginPath();
              ctx.arc(profilePicX, profilePicY, radius, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(profileImage, x, y, scaledWidth, scaledHeight);
              ctx.restore();
            };
          }

          const textX = width * 0.75; // Center text below the profile picture
          const textY = height * 0.58;    

          ctx.font = `${Math.floor(width * 0.05)}px Google Sans`;
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(name, textX, textY);
        };
      }
    }
  }, [name, profilePicture, selectedColor]);

  useEffect(() => {
    generate();

    const handleResize = () => {
      generate();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generate]);

  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[1100px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Show demmm!🥳
        </h1>
        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold lg:w-[900px] mx-auto">
          Generate and share your unique BuildWithAl Ilorin 2025 DP
        </p>
        {/* <DateAndLocation /> */}
      </section>

      <section className="py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <DpForm
            name={name}
            setName={setName}
            setProfilePicture={setProfilePicture}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={colors}
          />

          <div className="flex justify-center lg:justify-end">
            <DpCanvas
              name={name}
              profilePicture={profilePicture}
              canvasRef={canvasRef}
            />
          </div>
        </div>
      </section>
    </div>
  );
}