import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const GenerateDPPill = () => {
  return (
    <div className="fixed bottom-6 right-6 z-20">
      <Button
        as={Link}
        href="/get-dp"
        borderRadius={50}
        py={8}
        className="!bg-[#5CDB6D] !text-black flex items-center gap-2"
      >
        Get DP{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-photo"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 8h.01" />
          <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
          <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
          <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
        </svg>
      </Button>
    </div>
  );
};

export default GenerateDPPill;
