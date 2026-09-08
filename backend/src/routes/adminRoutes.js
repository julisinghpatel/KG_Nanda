import express from 'express';
import { getAllBookings, updateBookingStatus } from '../controllers/bookingController.js';
import { createDoctor, getAllDoctors } from '../controllers/doctorController.js';

const router = express.Router();

const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  next();
};

router.use(adminAuth);
router.get('/bookings', getAllBookings);
router.patch('/bookings/:id/status', updateBookingStatus);
router.get('/doctors', getAllDoctors);
router.post('/doctors', createDoctor);
export default router;
