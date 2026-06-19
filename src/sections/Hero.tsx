import { motion } from 'framer-motion';
import { Instagram, MessageCircle, ArrowRight, TrendingUp, FileText, Video, User } from 'lucide-react';
import { FloatingBlob } from '../components/FloatingBlob';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const services = [
  { icon: Instagram, label: 'Instagram SMM' },
  { icon: FileText, label: 'Контент-стратегія' },
  { icon: Video, label: 'Reels' },
  { icon: User, label: 'Особистий бренд' },
];

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-bg px-6 py-20 lg:px-16 xl:px-24">
      {/* Floating blobs */}
      <FloatingBlob className="top-20 -left-20" size={400} color="rgba(255, 180, 106, 0.12)" delay={0} />
      <FloatingBlob className="top-60 right-0" size={350} color="rgba(255, 180, 106, 0.10)" delay={2} duration={10} />
      <FloatingBlob className="bottom-20 left-1/3" size={300} color="rgba(255, 156, 66, 0.08)" delay={1} duration={9} />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:gap-8">
        {/* Left side */}
        <motion.div
          className="flex flex-1 flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-5 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              SMM SPECIALIST | UKRAINE
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-dark md:text-5xl lg:text-6xl"
          >
            КОНТЕНТ, ЩО
            <br />
            ПЕРЕТВОРЮЄ
            <br />
            <span className="text-primary">ПІДПИСНИКІВ НА ПОКУПЦІВ</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-lg text-base leading-relaxed text-secondary md:text-lg"
          >
            Допомагаю бізнесу, експертам та особистим брендам залучати клієнтів через контент, стратегію та сучасний SMM.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-colors hover:bg-dark/90"
            >
              Обговорити проєкт
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors hover:bg-secondary/5"
            >
              <MessageCircle className="h-4 w-4" />
              Telegram
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-12">
            {[
              { num: '50+', label: 'Проєктів' },
              { num: '3+', label: 'Роки досвіду' },
              { num: '100%', label: 'Індивідуальний підхід' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-dark">{stat.num}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — Dashboard Card */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Decorative circles */}
          <motion.div
            className="absolute -top-10 -right-10 h-32 w-32 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-primary/10"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 -right-8 h-14 w-14 rounded-full border-2 border-primary/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Dashboard card */}
          <div className="relative w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl shadow-dark/5">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-dark">Панель послуг</h3>
                <p className="text-sm text-secondary">SMM-студія</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div className="space-y-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex cursor-default items-center gap-4 rounded-2xl bg-bg p-4 transition-colors hover:bg-primary/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-dark">{service.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-5"
            >
              <p className="text-center text-sm font-medium leading-relaxed text-dark">
                Без шаблонів.
                <br />
                Без води.
                <br />
                <span className="font-bold text-primary">Тільки стратегія та результат.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
