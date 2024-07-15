import Image from "next/image";
import React from "react";
import DevFestLogo from "@public/devfest-ilorin.svg";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import clsx from "clsx";

export interface NavMenuProps {
  currentPath: "home" | "speakers" | "schedule" | "sponsors" | "team";
}

type MenuItem = {
  title: string;
  path: string;
};

export default function NavMenu({ currentPath = "home" }: NavMenuProps) {
  const menuLinks: MenuItem[] = [
    {
      title: "Speakers",
      path: "/speakers",
    },
    {
      title: "Schedule",
      path: "/schedule",
    },
    {
      title: "Sponsors",
      path: "/sponsors",
    },
    {
      title: "Team",
      path: "/team",
    },
  ];

  return (
    <nav className={currentPath === "home" ? "bg-devfest-hero" : "#F0F0F0"}>
      <div className="container mx-auto w-full flex flex-col lg:flex-row items-center px-10 lg:px-20 py-5 justify-between">
        <Link href={"/"}>
          <Image
            src={DevFestLogo}
            alt={"devfest logo"}
            className="h-[48px] w-auto contain-content"
          />
        </Link>
        <div
          className="
                z-50 fixed bottom-0 left-0 bg-gray-300 w-full h-[50px] flex flex-row gap-5 px-5 drop-shadow-2xl shadow-lg
                lg:w-auto lg:h-auto lg:bg-transparent lg:relative lg:items-center lg:gap-10 lg:shadow-none
                "
        >
          <ul className="flex flex-row items-center gap-10 font-medium overflow-x-auto">
            {menuLinks.map((link) => {
              return (
                <li
                  key={link.path}
                  className={clsx({
                    "text-devfest-markee border-b-2 border-devfest-markee":
                      currentPath.toLowerCase() === link.title.toLowerCase(),
                  })}
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
          <Button
            borderRadius={50}
            px={10}
            py={8}
            display={{ base: "none", lg: "flex" }}
          >
            Register Now <BsArrowUpRight />
          </Button>
        </div>
      </div>
    </nav>
  );
}
