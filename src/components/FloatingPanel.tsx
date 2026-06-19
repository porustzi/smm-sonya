import { X, Send, Loader2, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import { sendToTelegram } from '../lib/telegram';

interface FloatingPanelProps {
  isOpen: boolean;
  onClose: () => void;
  purpose: 'project' | 'consultation';
}

const services = [
  'Instagram SMM',
  'Контент-стратегія',
  'Візуальне оформлення',
  'Reels та відео',
  'Особистий бренд',
  'Консультація',
];

const config = {
  project: { title: 'Обговорити проєкт', badge: 'Проєкт', placeholder: 'Опишіть ваш проєкт або задачу' },
  consultation: { title: 'Записатися на консультацію', badge: 'Запис', placeholder: 'Розкажіть про свій бізнес' },
};

export function FloatingPanel({ isOpen, onClose, purpose }: FloatingPanelProps) {
  const c = config[purpose];
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setExiting(true);
      const timer = setTimeout(() => setExiting(false), 200);
      return () => clearTimeout(timer);
    }
    setExiting(false);
  }, [isOpen]);

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

  if (!isOpen && !exiting) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${isOpen && !exiting ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
    >
      <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${isOpen && !exiting ? 'opacity-100' : 'opacity-0'}`} />

      <div
        className={`relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen && !exiting ? 'scale-100 translate-y-0 opacity-100' : 'scale-[0.92] translate-y-4 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bg transition-colors hover:bg-secondary/10"
          aria-label="Закрити"
        >
          <X className="h-4 w-4 text-dark" aria-hidden="true" />
        </button>

        <div className="px-5 pt-8 pb-6 sm:px-7">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{c.badge}</span>
          </div>
          <h3 className="text-xl font-extrabold tracking-tight text-dark">
            {c.title}
          </h3>
          <p className="mt-1.5 text-sm text-secondary">
            Залиште контакти — я зв'яжуся з вами
          </p>
        </div>

        {status === 'success' ? (
          <div className="px-5 pb-8 text-center sm:px-7">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <CheckCircle className="h-7 w-7 text-green-500" aria-hidden="true" />
            </div>
            <p className="font-bold text-dark">Заявка відправлена!</p>
            <p className="text-sm text-secondary">Я скоро зв'яжуся</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-5 pb-8 sm:px-7">
            {status === 'error' && (
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3">
                <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-500" aria-hidden="true" />
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
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" aria-hidden="true" />
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={c.placeholder}
                rows={3}
                className="w-full resize-none rounded-2xl bg-bg px-4 py-3.5 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-transparent transition-all focus:ring-primary/30"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-dark px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-all hover:bg-dark/90 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4" aria-hidden="true" />
              )}
              {status === 'sending' ? 'Відправляємо...' : 'Надіслати'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
