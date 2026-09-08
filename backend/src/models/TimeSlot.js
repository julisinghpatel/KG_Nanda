import mongoose from 'mongoose';

const timeSlotSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: String, required: true },
  slot: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', default: null },
}, { timestamps: true });

export default mongoose.model('TimeSlot', timeSlotSchema);
