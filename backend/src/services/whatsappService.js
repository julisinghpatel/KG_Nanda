import axios from 'axios';

export const sendWhatsAppMessage = async (to, text) => {
  try {
    const phoneId = process.env.PHONE_NUMBER_ID;
    const token = process.env.WHATSAPP_TOKEN;
    if (!phoneId || !token || token === 'your_meta_access_token') {
      console.log(`[WhatsApp Mock] Sending message to ${to}: ${text}`);
      return;
    }
    await axios.post(
      `https://graph.facebook.com/v18.0/${phoneId}/messages`,
      { messaging_product: 'whatsapp', to, type: 'text', text: { body: text } },
      { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    const errData = error && error.response ? error.response.data : error.message;
    console.error('WhatsApp send error:', errData);
  }
};
