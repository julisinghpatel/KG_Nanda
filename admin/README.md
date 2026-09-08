# KG Nanda Hospital Admin — Premium UI

Run:
npm install
npm run dev

Open:
http://localhost:5174/admin/login

Demo login:
admin@kgnandahospital.com
Admin@123

IMPORTANT: this is frontend demo authentication only. Production MERN authentication must use a Node/Express backend with hashed passwords and JWT/session cookies.

Appointment flow:
Hospital website → department → doctor → patient details → date/time → POST /api/appointments
Admin → Appointments → doctor filter → department/status/search → approve/view/cancel

Doctor/department mapping is in src/constants/appointmentRules.js for frontend reference. The backend should validate the mapping and store the relationship in MongoDB.