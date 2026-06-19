const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

interface FormData {
  name: string;
  contact: string;
  service: string;
  message: string;
}

export async function sendToTelegram(data: FormData): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error('Telegram bot not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in .env');
  }

  const text = [
    `📩 <b>Нова заявка на консультацію</b>`,
    ``,
    `👤 <b>Ім'я:</b> ${data.name}`,
    `📞 <b>Контакт:</b> ${data.contact}`,
    `📌 <b>Послуга:</b> ${data.service}`,
    `💬 <b>Повідомлення:</b> ${data.message || '—'}`,
  ].join('\n');

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.description || 'Failed to send message');
  }
}
