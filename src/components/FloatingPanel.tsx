import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { sendToTelegram } from '../lib/telegram';

interface FloatingPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  'Instagram SMM',
  'Контент-стратегія',
  'Візуальне оформлення',
  'Reels та відео',
  'Особистий бренд',
  'Консультація',
];

export function FloatingPanel({ isOpen, onClose }: FloatingPanelProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !service) return;

    setStatus('sending');
    sendToTelegram({ name, contact, service, message })
      .then(() => {
        setStatus('success');
        setName('');
        setContact('');
        setService('');
        setMessage('');
        setTimeout(() => { setStatus('idle'); onClose(); }, 2000);
      })
      .catch((err) => {
        setStatus('error');
        setErrorText(err.message);
      });
  }

  function handleOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleOverlay}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bg transition-colors hover:bg-secondary/10"
            >
              <X className="h-4 w-4 text-dark" />
            </button>

            <div className="px-5 pt-8 pb-6 sm:px-7">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Запис</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-dark">
                Обговорити проєкт
              </h3>
              <p className="mt-1.5 text-sm text-secondary">
                Залиште контакти — я зв'яжуся з вами
              </p>
            </div>

            {status === 'success' ? (
              <div className="px-5 pb-8 text-center sm:px-7">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-50"
                >
                  <CheckCircle className="h-7 w-7 text-green-500" />
                </motion.div>
                <p className="font-bold text-dark">Заявка відправлена!</p>
                <p className="text-sm text-secondary">Я скоро зв'яжуся</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-5 pb-8 sm:px-7">
                {status === 'error' && (
                  <div className="mb-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-500" />
                    <span className="text-xs text-red-600">{errorText}</span>
                    <button type="button" onClick={() => setStatus('idle')} className="ml-auto text-xs font-semibold text-red-700 underline">OK</button>
                  </div>
                )}

                <div className="space-y-3.5">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше ім'я"
                    className="w-full rounded-2xl bg-bg px-4 py-3.5 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                  />
                  <input
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="@username або телефон"
                    className="w-full rounded-2xl bg-bg px-4 py-3.5 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                  />
                  <div className="relative">
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full appearance-none rounded-2xl bg-bg px-4 py-3.5 pr-10 text-sm text-dark outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                    >
                      <option value="" disabled>Оберіть послугу</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Повідомлення (необов'язково)"
                    rows={3}
                    className="w-full resize-none rounded-2xl bg-bg px-4 py-3.5 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-all hover:bg-dark/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status === 'sending' ? 'Відправляємо...' : 'Надіслати'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
