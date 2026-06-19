import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`animate-fade-up-in-view ${inView ? 'in-view' : ''} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
