import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle';
  children: React.ReactNode;
}

export function AnimatedBackground({ variant = 'section', children }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const variants = {
    hero: {
      gradient: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.15) 0%, rgba(20, 184, 166, 0.1) 50%, rgba(0, 0, 0, 0.9) 100%)',
      particles: 30,
    },
    section: {
      gradient: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.08) 0%, rgba(0, 0, 0, 0) 70%)',
      particles: 15,
    },
    subtle: {
      gradient: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.05) 0%, rgba(0, 0, 0, 0) 60%)',
      particles: 10,
    },
  };

  const config = variants[variant];

  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: config.gradient,
        }}
        animate={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.3 }}
      />

      {/* Floating particles */}
      {[...Array(config.particles)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background:
              Math.random() > 0.5
                ? 'rgba(249, 115, 22, 0.3)'
                : 'rgba(20, 184, 166, 0.3)',
          }}
          animate={{
            y: [0, Math.random() * -100 - 50, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Terrain-like wave lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 Q250,20 500,50 T1000,50 T1500,50 T2000,50 L2000,100 L0,100 Z"
          fill="url(#gradient1)"
          animate={{
            d: [
              'M0,50 Q250,20 500,50 T1000,50 T1500,50 T2000,50 L2000,100 L0,100 Z',
              'M0,50 Q250,70 500,50 T1000,50 T1500,50 T2000,50 L2000,100 L0,100 Z',
              'M0,50 Q250,20 500,50 T1000,50 T1500,50 T2000,50 L2000,100 L0,100 Z',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,70 Q250,40 500,70 T1000,70 T1500,70 T2000,70 L2000,100 L0,100 Z"
          fill="url(#gradient2)"
          animate={{
            d: [
              'M0,70 Q250,40 500,70 T1000,70 T1500,70 T2000,70 L2000,100 L0,100 Z',
              'M0,70 Q250,90 500,70 T1000,70 T1500,70 T2000,70 L2000,100 L0,100 Z',
              'M0,70 Q250,40 500,70 T1000,70 T1500,70 T2000,70 L2000,100 L0,100 Z',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0.4)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(20, 184, 166, 0.3)" />
            <stop offset="100%" stopColor="rgba(20, 184, 166, 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
