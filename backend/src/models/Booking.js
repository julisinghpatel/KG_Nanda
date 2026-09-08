import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  patientPhone: { type: String, required: true },
  patientName: { type: String, required: true },
  patientEmail: { type: String, default: '' },
  department: { type: String, required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', default: null },
  appointmentDate: { type: String, required: true },
  timeSlot: { type: String, default: 'Any' },
  message: { type: String, default: '' },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);