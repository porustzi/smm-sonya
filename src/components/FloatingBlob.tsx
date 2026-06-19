import { motion } from 'framer-motion';

interface FloatingBlobProps {
  className?: string;
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
}

export function FloatingBlob({
  className = '',
  size = 300,
  color = 'rgba(255, 180, 106, 0.15)',
  delay = 0,
  duration = 8,
}: FloatingBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}
