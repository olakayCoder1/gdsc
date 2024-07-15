import React from 'react'
import GdgLogo from "@public/gdg-logo.svg"
import ArrowIcon from "@public/icon/arrow.svg"
import DoubeUIcon from "@public/icon/double-u.svg"
import GlobeIcon from "@public/icon/globe.svg"
import StarIcon from "@public/icon/star.svg"
import Image from 'next/image'

export default function GdgIconset({ fontSize = 24 }: { fontSize?: number }) {
  return (
      <div className="flex flex-row flex-wrap items-center">
          <Image
              src={GdgLogo}
              alt={""}
              className={`h-[${fontSize}px] lg:h-[${fontSize * 2}px] contain-content`}
          />
          <p>Google Developer Groups Ilorin</p>
          <Image
              src={StarIcon}
              alt={""}
              className={`h-[${fontSize}px] lg:h-[${fontSize * 2}px] contain-content`}
          />
          <Image
              src={ArrowIcon}
              alt={""}
              className={`h-[${fontSize}px] lg:h-[${fontSize * 2}px] contain-content`}
          />
          <Image
              src={GlobeIcon}
              alt={""}
              className={`h-[${fontSize}px] lg:h-[${fontSize * 2}px] contain-content`}
          />
          <Image
              src={DoubeUIcon}
              alt={""}
              className={`h-[${fontSize}px] lg:h-[${fontSize * 2}px] contain-content`}
          />
          <Image
              src={StarIcon}
              alt={""}
              className={`h-[${fontSize}px] lg:h-[${fontSize * 2}px] contain-content`}
          />
      </div>
  )
}
