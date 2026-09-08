import Booking from '../models/Booking.js';

// Create new booking
export const createBooking = async (req, res) => {
  try {
    const { fullName, phone, email, department, preferredDate, preferredTime, message } = req.body;

    if (!fullName || !phone || !department || !preferredDate) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const bookingId = 'KGN-' + Date.now();

    const booking = new Booking({
      bookingId,
      patientName: fullName,
      patientPhone: phone,
      patientEmail: email || '',
      department,
      appointmentDate: preferredDate,
      timeSlot: preferredTime || 'Any',
      message: message || '',
      status: 'Pending',
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: 'Appointment booked successfully',
      bookingId,
    });
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all bookings (admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findOne({ bookingId: req.params.id });
    if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' });
    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findOneAndUpdate(
      { bookingId: req.params.id },
      { status },
      { new: true }
    );
    if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' });
    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
