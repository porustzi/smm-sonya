import { useInView } from '../hooks/useInView';
import { CountUp } from '../components/CountUp';

const stats = [
  { value: 87, suffix: '+', label: 'проєктів' },
  { value: 74.9, suffix: 'M+', label: 'охоплення', isDecimal: true },
  { value: 1500, suffix: '+', label: 'створених одиниць контенту' },
  { value: 4625, suffix: '+', label: 'лідів' },
];

function StatCard({ stat, inView, index }: { stat: typeof stats[0]; inView: boolean; index: number }) {
  return (
    <div
      className="text-center"
      style={{ animation: inView ? `fade-up 0.6s ease-out ${index * 0.15}s forwards` : 'none', opacity: inView ? undefined : 0 }}
    >
      <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
        {stat.isDecimal ? (
          <span>{inView ? '74.9' : '0'}{stat.suffix}</span>
        ) : (
          <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
        )}
      </div>
      <div className="text-sm font-medium text-white/80 md:text-base">{stat.label}</div>
    </div>
  );
}

export function Results() {
  const { ref, inView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary-hover px-6 py-24 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
