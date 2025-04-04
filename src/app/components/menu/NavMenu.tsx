import Image from "next/image";
import React from "react";
import Logo from "@public/logo.png";
import Link from "next/link";
import DrawerMenu from "./DrawerMenu";
import MenuLinks from "./MenuLinks";

export interface NavMenuProps {
  currentPath:
    | "home"
    | "speakers"
    | "schedule"
    | "sponsors"
    | "team"
    | "get-dp"
    | "2024";
}

export default function NavMenu({ currentPath = "home" }: NavMenuProps) {
  return (
    <nav
      className={
        currentPath === "home"
          ? "bg-devfest-hero"
          : currentPath === "2024"
          ? "bg-devfest-hero"
          : "#F0F0F0"
      }
    >
      <div className="container mx-auto w-full flex-nowrap flex flex-col lg:flex-row lg:items-center px-4 lg:px-20 py-5 justify-between">
        <div className="flex items-center justify-between ">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Build with AI logo"
              className="h-[52px] lg:h-[64px] w-auto contain-content"
            />
          </Link>
          <DrawerMenu currentPath={currentPath} />
        </div>
        <div className="hidden lg:block">
          <MenuLinks currentPath={currentPath} />
        </div>
      </div>
    </nav>
  );
}
