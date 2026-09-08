import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  department: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  availableDays: { type: [String], default: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
  availableSlots: { type: [String], default: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Doctor', doctorSchema);
