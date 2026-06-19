import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { sendToTelegram } from '../lib/telegram';

const services = [
  'Instagram SMM',
  'Контент-стратегія',
  'Візуальне оформлення',
  'Reels та відео',
  'Особистий бренд',
  'Консультація',
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState({ name: '', contact: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.service) return;

    setStatus('sending');
    sendToTelegram(form)
      .then(() => {
        setStatus('success');
        setForm({ name: '', contact: '', service: '', message: '' });
        setTimeout(() => { setStatus('idle'); onClose(); }, 2500);
      })
      .catch((err) => {
        setStatus('error');
        setErrorText(err.message);
      });
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={handleOverlayClick}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-[32px] bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bg transition-colors hover:bg-secondary/10"
            >
              <X className="h-4 w-4 text-dark" />
            </button>

            {/* Header */}
            <div className="px-8 pt-10 pb-6">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Запис</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-dark">
                Записатися на консультацію
              </h3>
              <p className="mt-2 text-sm text-secondary">
                Залиште контакти — я зв'яжуся з вами найближчим часом
              </p>
            </div>

            {/* Success state */}
            {status === 'success' && (
              <div className="px-8 pb-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50"
                >
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </motion.div>
                <p className="text-lg font-bold text-dark">Заявка відправлена!</p>
                <p className="text-sm text-secondary">Я зв'яжуся з вами найближчим часом</p>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="px-8 pb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-lg font-bold text-dark">Помилка</p>
                <p className="mb-4 text-sm text-secondary">{errorText}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Спробувати ще
                </button>
              </div>
            )}

            {/* Form */}
            {status !== 'success' && (
              <form onSubmit={handleSubmit} className="px-8 pb-10">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-dark">Ім'я *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ваше ім'я"
                      className="w-full rounded-2xl bg-bg px-4 py-3 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-dark">
                      Telegram / Телефон *
                    </label>
                    <input
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="@username або +380..."
                      className="w-full rounded-2xl bg-bg px-4 py-3 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-dark">Послуга *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full appearance-none rounded-2xl bg-bg px-4 py-3 text-sm text-dark outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                    >
                      <option value="" disabled>Оберіть послугу</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-dark">
                      Повідомлення
                      <span className="font-normal text-secondary"> (необов'язково)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишіть ваш проєкт або задачу"
                      rows={3}
                      className="w-full resize-none rounded-2xl bg-bg px-4 py-3 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-all hover:bg-dark/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status === 'sending' ? 'Відправляємо...' : 'Відправити'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
