import express from 'express';
import { verifyWebhook, handleIncomingMessage } from '../controllers/whatsappController.js';

const router = express.Router();

router.get('/webhook', verifyWebhook);
router.post('/webhook', handleIncomingMessage);

export default router;