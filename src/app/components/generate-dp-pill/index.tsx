import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const GenerateDPPill = () => {
  return (
    <div className="fixed bottom-6 right-6 z-20">
      <Button
        as={Link}
        href="/generate-dp"
        borderRadius={50}
        py={8}
        className="!bg-[#5CDB6D] !text-black"
      >
        Generate DP
      </Button>
    </div>
  );
};

export default GenerateDPPill;
