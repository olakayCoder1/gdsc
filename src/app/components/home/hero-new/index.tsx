'use client';

import React, { useEffect, useState } from 'react';
import Confetti from '../../confetti/ConfettiV2';
import FloatingIcons from '../../FloatingIcons/FloatingIcons';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { BsArrowUpRight, BsCamera, BsChevronDown } from 'react-icons/bs';
import Countdown from '../../Countdown/Countdown';
import { ctaLinks } from "@/data";

const NewHomeHeroNew = () => {
  const eventDate =  new Date('April 8, 2025 00:00:00');
  // eventDate.setDate(eventDate.getDate() + 1);

  const [showConfetti, setShowConfetti] = useState(false);
  const [countdownComplete, setCountdownComplete] = useState(false);

  const handleCountdownComplete = () => {
    setCountdownComplete(true);
    setShowConfetti(true);

    // Stop confetti after 8 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  useEffect(() => {
    // For testing the confetti and thank you message
    // handleCountdownComplete();
  }, []);

  return (
    <section className="px-4 lg:px-20 bg-devfest-hero pt-10 h-[calc(100vh_-_130px)]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 relative z-10 h-full">
        <Confetti isActive={showConfetti} />
        <div className="w-full relative">
          <div className='hidden lg:block' >
          <FloatingIcons />
          </div>
          
          <div className="container mx-auto px-4 py-16 relative z-10 ">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
                <span className="text-gray-800"> Build with AI</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-700">
                Join us for an exciting event where you'll learn how to leverage
                AI to build amazing applications
              </p>

              {!countdownComplete ? (
                <>
                  <div className="mb-6">
                    <span className="block text-lg text-gray-600 mb-2">
                      Event Starts In:
                    </span>
                    <Countdown
                      targetDate={eventDate}
                      onComplete={handleCountdownComplete}
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between gap-5 lg:px-10 mt-5 w-full ">
                    <Button
                        as={Link}
                        href={ctaLinks.calendar.link}
                        target="_blank"
                        borderRadius={50}
                        py={8}
                        className="flex items-center gap-2 !font-bold w-full"
                    >
                        Add to your Calendar!  <BsArrowUpRight />
                    </Button>
            
                    <Button
                        as={Link}
                        href="/get-dp"
                        borderRadius={50}
                        py={8}
                        className="flex items-center gap-2 !font-bold w-full"
                    >
                        Generate DP!
                    </Button>  
            
                    <Button
                        as={Link}
                        href={ctaLinks.event.link}
                        target="_blank"
                        borderRadius={50}
                        py={8}
                        className="flex items-center gap-2 !font-bold w-full"
                    >
                        Visit event page! <BsArrowUpRight />
                    </Button>
            
                </div>

                  <div className="mt-16 animate-bounce">
                    <a href="#about" className="inline-block">
                      <BsChevronDown size={32} className="text-[#FBBC05]" />
                    </a>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center space-y-8 py-10 px-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#4285F4]">
                    Thank You for Being Part of Our Event!
                  </h2>
                  <p className="text-lg text-gray-700">
                    We hope you enjoyed Google Build with AI. Share your
                    experience with the world!
                  </p>
                  <Link href="/dp-customization">
                    <Button
                      size="lg"
                      className="flex items-center space-x-2 px-8 bg-[#EA4335] hover:bg-[#C5221F]"
                    >
                      <BsCamera size={18} />
                      <span>Create Event DP</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHomeHeroNew;
