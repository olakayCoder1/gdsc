'use client';
import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsComplete(true);
        onComplete();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex flex-col items-center my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase text-gray-500 font-medium mt-2">
            Days
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase text-gray-500 font-medium mt-2">
            Hours
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase text-gray-500 font-medium mt-2">
            Minutes
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase text-gray-500 font-medium mt-2">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
