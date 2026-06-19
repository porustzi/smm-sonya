import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { sendToTelegram } from '../lib/telegram';

interface BookingFormProps {
  compact?: boolean;
}

export function BookingForm({ compact }: BookingFormProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setStatus('sending');
    sendToTelegram({ name, contact, service: 'Консультація', message: '' })
      .then(() => {
        setStatus('success');
        setName('');
        setContact('');
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((err) => {
        setStatus('error');
        setErrorText(err.message);
      });
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-3 rounded-2xl bg-green-50 px-6 py-4"
      >
        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
        <span className="text-sm font-semibold text-green-700">Заявка відправлена! Я скоро зв'яжуся</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'flex flex-wrap items-end gap-3' : 'space-y-4'}`}>
      {status === 'error' && (
        <div className="flex w-full items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5">
          <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-500" />
          <span className="text-xs text-red-600">{errorText}</span>
          <button type="button" onClick={() => setStatus('idle')} className="ml-auto text-xs font-semibold text-red-700 underline">OK</button>
        </div>
      )}

      {compact ? (
        <>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше ім'я"
            className="min-w-0 flex-1 rounded-2xl bg-white/80 px-5 py-3.5 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-secondary/10 transition-all focus:ring-primary/30"
          />
          <input
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="@username або телефон"
            className="min-w-0 flex-1 rounded-2xl bg-white/80 px-5 py-3.5 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-secondary/10 transition-all focus:ring-primary/30"
          />
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-2xl bg-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-colors hover:bg-dark/90 disabled:opacity-60"
          >
            {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === 'sending' ? '...' : 'Надіслати'}
          </motion.button>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше ім'я"
              className="w-full rounded-2xl bg-white px-5 py-4 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-secondary/10 transition-all focus:ring-primary/30 sm:flex-1"
            />
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="@username або телефон"
              className="w-full rounded-2xl bg-white px-5 py-4 text-sm text-dark placeholder-secondary/50 outline-none ring-1 ring-secondary/10 transition-all focus:ring-primary/30 sm:flex-1"
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-dark px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-dark/10 transition-colors hover:bg-dark/90 disabled:opacity-60"
          >
            {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === 'sending' ? 'Відправляємо...' : 'Надіслати'}
          </motion.button>
        </>
      )}
    </form>
  );
}
