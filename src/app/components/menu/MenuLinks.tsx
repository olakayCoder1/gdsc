import { ctaLinks, menuLinks } from "@/data";
import React from "react";
import { NavMenuProps } from "./NavMenu";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function MenuLinks({ currentPath }: NavMenuProps) {
  return (
    <div className="flex flex-row gap-5 px-5 lg:w-auto lg:h-auto lg:bg-transparent lg:relative lg:items-center lg:gap-10">
      <ul className="flex flex-row items-center gap-10 font-medium overflow-x-auto">
        {menuLinks.map((link) => {
          return (
            <li
              key={link.path}
              className={clsx({
                "text-devfest-active border-b-2 border-devfest-active":
                  currentPath.toLowerCase() === link.title.toLowerCase(),
              })}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <Button
        as={Link}
        href={ctaLinks.register.link}
        target="_blank"
        borderRadius={50}
        py={8}
        display={{ base: "none", lg: "flex" }}
        className="flex items-center gap-2"
      >
        Register Now <BsArrowUpRight />
      </Button>
    </div>
  );
}
