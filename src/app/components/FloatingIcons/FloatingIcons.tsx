import Image from 'next/image';
import React from 'react';

const FloatingIcons: React.FC = () => {
  const icons = [
    { id: 1, src: '/google.svg', alt: 'Google Logo', className: 'float' },
    { id: 2, src: '/ai.svg', alt: 'AI Icon', className: 'float-reverse' },
    { id: 3, src: '/code.svg', alt: 'Code Icon', className: 'float-slow' },
    {
      id: 4,
      src: '/gdg.svg',
      alt: 'Build with AI Logo',
      className: 'float-fast',
    },
    { id: 5, src: '/robot.svg', alt: 'Robot Icon', className: 'float' },
    { id: 6, src: '/brain.svg', alt: 'Brain Icon', className: 'float-reverse' },
  ];

  const radius = 420; // Increased radius for better spread

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {icons.map((icon, index) => {
        const angle = (index / icons.length) * (2 * Math.PI);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const duration = Math.random() * 4 + 4; // Randomized floating speed (4s to 8s)

        return (
          <div
            key={icon.id}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              opacity: (Math.random() * 0.4 + 0.4).toFixed(2),
              animationDuration: `${duration}s`, // Each icon floats at a different speed
            }}
            className={`absolute transition-all ease-in-out ${icon.className}`}
          >
            <Image 
              src={icon.src}
              alt={icon.alt}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
