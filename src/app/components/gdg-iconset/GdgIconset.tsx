import React from 'react'
import GdgLogo from "@public/gdg-logo.svg"
import ArrowIcon from "@public/icon/arrow.svg"
import DoubeUIcon from "@public/icon/double-u.svg"
import GlobeIcon from "@public/icon/globe.svg"
import StarIcon from "@public/icon/star.svg"
import Image from 'next/image'

interface GdgIconsetProps {
    fontSize?: number;
    gap?: number;
    showTitle?: boolean
}
export default function GdgIconset({ fontSize = 24, gap = 20, showTitle = true } : GdgIconsetProps) {
    return (
        <div className={`flex flex-row flex-wrap gap-5 items-center lg:gap-[${gap}]px`}>
            <Image
                src={GdgLogo}
                alt={""}
                height={fontSize}
                width={fontSize * 2}
                className='contain-content'
            />
            {showTitle  && <p>Google Developer Groups Ilorin</p>}
            <Image
                src={StarIcon}
                alt={""}
                height={fontSize}
                width={fontSize}
                className='contain-content'
            />
            <Image
                src={ArrowIcon}
                alt={""}
                height={fontSize}
                width={fontSize * 3}
                className='contain-content'
            />
            <Image
                src={GlobeIcon}
                alt={""}
                height={fontSize}
                width={fontSize}
                className='contain-content'
            />
            <Image
                src={DoubeUIcon}
                alt={""}
                height={fontSize}
                width={fontSize * 5}
                className='contain-content'
            />
            <Image
                src={StarIcon}
                alt={""}
                height={fontSize}
                width={fontSize}
                className='contain-content'
            />
        </div>
    )
}
