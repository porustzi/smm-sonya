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
    <div
      className={`absolute rounded-full pointer-events-none blur-3xl animate-float ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        '--float-duration': `${duration}s`,
        '--float-delay': `${delay}s`,
      } as React.CSSProperties}
    />
  );
}
