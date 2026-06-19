import { useCountUp } from '../hooks/useCountUp';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  inView: boolean;
  className?: string;
}

export function CountUp({ end, suffix = '', prefix = '', duration = 2000, inView, className = '' }: CountUpProps) {
  const count = useCountUp(end, duration, 0, inView);

  return (
    <span className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
