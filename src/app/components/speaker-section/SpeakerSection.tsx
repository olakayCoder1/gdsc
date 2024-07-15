import React from 'react'
import GdgIconset from '../gdg-iconset/GdgIconset'
import Image, { StaticImageData } from 'next/image'

import Recap9Img from '@public/event-recaps/recap_9.svg'
import SamsonImg from '@public/speaker/samson-goddy.svg'

type Speaker = {
    name: string,
    designation: string,
    picture: string | StaticImageData
}

const speakerList: Speaker[] = [
    {
        name: 'Samson Goddy',
        designation: 'Co-Founder OSCA',
        picture: SamsonImg
    },
]

export default function SpeakerSection() {
  return (
      <div className="lg:min-w-6xl mx-auto lg:mt-10">
          <div className="flex flex-row flex-wrap items-center justify-center px-10 pt-10 pb-5 gap-5">
              <h1 className="font-semibold text-3xl md:text-3xl lg:text-5xl">Our Speakers</h1>
              <GdgIconset />
          </div>
          <div>
              <ul
                  className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
              >
                  {speakerList.map((item, idx) => (
                      <li
                          className="w-[320px] max-w-full relative rounded-2xl flex-shrink-0 md:w-[450px]"
                          key={`speaker-section-${idx}`}
                      >
                          <div>
                              <Image
                                  src={item.picture}
                                  alt={""}
                                  className="h-full w-full contain-content"
                              />
                              <div className='flex flex-row flex-nowrap'>
                                  <h1 className="font-semibold text-lg">Speaker</h1>
                                  <GdgIconset fontSize={16} gap={10} showTitle={false} />
                              </div>
                              <p>
                                  
                              </p>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  )
}
