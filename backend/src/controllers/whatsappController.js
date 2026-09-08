import Booking from '../models/Booking.js';
import { sendWhatsAppMessage } from '../services/whatsappService.js';

// Meta Webhook Verification
export const verifyWebhook = (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
    console.log('Webhook verified successfully');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};

// Handle incoming WhatsApp messages
export const handleIncomingMessage = async (req, res) => {
  try {
    const entry = req.body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (message && message.type === 'text') {
      const from = message.from;
      const text = message.text.body.trim();

      let replyMsg = '';

      // Menu Logic according to Flow Diagram
      if (text === '1' || text.toLowerCase().includes('book')) {
        replyMsg = 'Doctor select karein:\n1. Dr. Sharma (General)\n2. Dr. Verma (Cardiologist)\n3. Dr. Gupta (Pediatrician)';
      } else if (text === '2' || text.toLowerCase().includes('status')) {
        replyMsg = 'Apna Booking ID enter karein (e.g. KGN-123456) ya phone number type karein.';
      } else if (text === '3' || text.toLowerCase().includes('support')) {
        replyMsg = 'Hmare helpdesk se contact karein:\n📞 096283 00438\n⏰ 24x7 Emergency Available';
      } else if (text.toLowerCase().includes('dr. verma') || text === '2') {
        replyMsg = 'Available Slots for Today:\n1. 10:00 AM\n2. 02:00 PM\n3. 05:00 PM\n\nSlot number reply karein.';
      } else {
        replyMsg = 'Namaste! 🙏 Welcome to KG Nanda Hospital.\nAap kya karna chahte hain?\n1. Appointment Book karein\n2. Booking Status check karein\n3. Support se baat karein';
      }

      await sendWhatsAppMessage(from, replyMsg);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error('WhatsApp Webhook Error:', error);
    res.sendStatus(500);
  }
};