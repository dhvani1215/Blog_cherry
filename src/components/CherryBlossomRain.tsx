
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
}

export function CherryBlossomRain() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (id: number): Petal => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -20,
      rotation: Math.random() * 360,
      size: Math.random() * 20 + 15,
      speed: Math.random() * 2 + 1,
      drift: Math.random() * 2 - 1,
      opacity: Math.random() * 0.6 + 0.2,
    });

    // Initialize petals
    const initialPetals = Array.from({ length: 15 }, (_, i) => ({
      ...createPetal(i),
      y: Math.random() * window.innerHeight,
    }));
    setPetals(initialPetals);

    let animationId: number;
    let petalId = 15;

    const animate = () => {
      setPetals(currentPetals => {
        const updatedPetals = currentPetals.map(petal => ({
          ...petal,
          y: petal.y + petal.speed,
          x: petal.x + petal.drift,
          rotation: petal.rotation + 1,
        })).filter(petal => petal.y < window.innerHeight + 50);

        // Add new petals occasionally
        if (Math.random() < 0.02 && updatedPetals.length < 20) {
          updatedPetals.push(createPetal(petalId++));
        }

        return updatedPetals;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute text-pink-300"
          style={{
            left: petal.x,
            top: petal.y,
            transform: `rotate(${petal.rotation}deg)`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}
