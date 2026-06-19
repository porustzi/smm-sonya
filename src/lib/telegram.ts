const BOT_TOKEN = '8699939391:AAH49EbwmYy_OKVjnTd2P-aygmtctiu3Gcg';
const CHAT_ID = 707088240;

interface FormData {
  name: string;
  contact: string;
  service: string;
  message: string;
}

export async function sendToTelegram(data: FormData): Promise<void> {

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
