import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface TerrainHeroProps {
  children: React.ReactNode;
  imageUrl?: string;
  overlay?: boolean;
}

export function TerrainHero({ children, imageUrl, overlay = true }: TerrainHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    let animationFrameId: number;
    let offset = 0;

    const drawTerrain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0.1)');
      gradient.addColorStop(0.5, 'rgba(20, 184, 166, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw multiple terrain layers
      const layers = [
        { yOffset: 100, amplitude: 30, frequency: 0.01, speed: 0.5, color: 'rgba(249, 115, 22, 0.2)' },
        { yOffset: 150, amplitude: 40, frequency: 0.008, speed: 0.3, color: 'rgba(20, 184, 166, 0.15)' },
        { yOffset: 200, amplitude: 50, frequency: 0.006, speed: 0.2, color: 'rgba(249, 115, 22, 0.1)' },
      ];

      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x++) {
          const y =
            layer.yOffset +
            Math.sin((x + offset * layer.speed) * layer.frequency) * layer.amplitude +
            Math.sin((x + offset * layer.speed * 0.5) * layer.frequency * 2) * (layer.amplitude * 0.5);
          
          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = layer.color;
        ctx.fill();

        // Add glow effect
        ctx.strokeStyle = layer.color.replace('0.2', '0.4').replace('0.15', '0.3').replace('0.1', '0.2');
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      offset += 1;
      animationFrameId = requestAnimationFrame(drawTerrain);
    };

    drawTerrain();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      {imageUrl && (
        <div className="absolute inset-0">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Canvas terrain */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      )}

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(249, 115, 22, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
