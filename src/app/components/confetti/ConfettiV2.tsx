
import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speedX: number;
  speedY: number;
  rotationSpeed: number;
}

interface ConfettiProps {
  isActive: boolean;
}

const colors = [
  '#4285F4', // Google Blue
  '#DB4437', // Google Red
  '#F4B400', // Google Yellow
  '#0F9D58', // Google Green
  '#7B1FA2', // Purple
  '#039BE5', // Light Blue
];

const Confetti: React.FC<ConfettiProps> = ({ isActive }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    if (!isActive) {
      setConfetti([]);
      return;
    }
    
    // Create confetti pieces
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 100,
        size: 5 + Math.random() * 15,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        speedX: -2 + Math.random() * 4,
        speedY: 3 + Math.random() * 5,
        rotationSpeed: -3 + Math.random() * 6,
      });
    }
    
    setConfetti(pieces);
    
    const interval = setInterval(() => {
      setConfetti(prev => 
        prev.map(piece => ({
          ...piece,
          y: piece.y + piece.speedY,
          x: piece.x + piece.speedX,
          rotation: (piece.rotation + piece.rotationSpeed) % 360
        })).filter(piece => piece.y < window.innerHeight)
      );
    }, 30);
    
    return () => clearInterval(interval);
  }, [isActive]);
  
  if (!isActive || confetti.length === 0) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map(piece => (
        <div 
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
