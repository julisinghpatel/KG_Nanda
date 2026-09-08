/**
 * Static Mock Data for KG Nanda Hospital Frontend.
 * Used for development testing, offline previews, and reference datasets.
 */

export const MOCK_DOCTORS = [
  {
    id: '1',
    name: 'Dr. Anand Prakash Tiwari',
    role: 'Senior Gynaecologist & Infertility Specialist',
    department: 'Obstetrics & Gynaecology',
    qualification: 'MBBS, M.S. (Obs & Gyane)',
    experience: '15+ Years',
    image: '/Home/Dr. Anand Prakash.png',
    specialty: 'High-Risk Pregnancy, Normal & Cesarean Delivery, Infertility Treatment, Laparoscopic Gynecological Surgery, PCOS & Menstrual Disorders, Antenatal & Postnatal Care',
    is_active: true,
  },
  {
    id: '10',
    name: 'Dr. Neepu Chaurasia',
    role: 'Obstetrics & Gynaecology',
    department: 'Gynecologist & Obstetrician',
    qualification: 'MBBS, Diploma in Gynecology & Obstetrics (D.G.O.)',
    experience: '10+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Pregnancy Care, Normal Delivery, Women\'s Health, Menstrual Disorders, Family Planning, High-Risk Pregnancy',
    is_active: true,
  },
  {
    id: '3',
    name: 'Dr. Nidhi Gupta',
    role: 'Gynecologist & Obstetrician',
    department: 'Gynecologist & Obstetrician',
    qualification: 'MBBS, R.M.O.',
    experience: '8+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Women\'s Health, Pregnancy Care, Gynecological Consultation, Antenatal Care, Postnatal Care, Routine Gynecology',
    is_active: true,
  },
  {
    id: '4',
    name: 'Dr. Priyanka Mishra',
    role: 'Obstetrics & Gynaecology',
    department: 'Gynecologist & Obstetrician',
    qualification: 'MBBS, R.M.O.',
    experience: '7+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Pregnancy Care, Women\'s Wellness, Gynecological Disorders, Family Planning, Antenatal Care, General Gynecology',
    is_active: true,
  },
  {
    id: '5',
    name: 'Dr. Nisha Singh',
    role: 'Obstetrics & Gynaecology',
    department: 'Gynecologist & Obstetrician',
    qualification: 'MBBS, R.M.O.',
    experience: '7+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Women\'s Health, Pregnancy Management, Routine Gynecological Care, Antenatal & Postnatal Care, PCOD Management, General Obstetrics',
    is_active: true,
  },
  {
    id: '2',
    name: 'Dr. Robert Vance',
    role: 'Chief Neurosurgeon',
    department: 'Neurology',
    qualification: 'MBBS, MS, MCh (Neurosurgery)',
    experience: '18+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Brain Tumors, Spinal Disorders, Neurotrauma Surgery',
    is_active: true,
  },
  {
    id: '6',
    name: 'Dr. Alisha Khan',
    role: 'Cardiology Head',
    department: 'Cardiology',
    qualification: 'MBBS, MD (Medicine), DM (Cardiology)',
    experience: '15+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Interventional Cardiology, Heart Failure Management, Angioplasty',
    is_active: true,
  },
  {
    id: '7',
    name: 'Dr. Sameer Joshi',
    role: 'Senior Pediatrician',
    department: 'Pediatrics',
    qualification: 'MBBS, MD (Pediatrics), DCH',
    experience: '16+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Neonatal Care, Pediatric Nutrition, Infectious Diseases',
    is_active: true,
  },
  {
    id: '8',
    name: 'Dr. Elena Rostova',
    role: 'Oncology Expert',
    department: 'Oncology',
    qualification: 'MBBS, MD, DM (Medical Oncology)',
    experience: '14+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'Chemotherapy, Immunotherapy, Targeted Cancer Therapies',
    is_active: true,
  },
  {
    id: '9',
    name: 'Dr. Priya Sharma',
    role: 'Gynaecology Specialist',
    department: 'Obstetrics & Gynaecology',
    qualification: 'MBBS, MS (OBGYN), FMAS',
    experience: '12+ Years',
    image: 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: 'High-risk Pregnancy, Laparoscopic Gynaecology, Infertility Care',
    is_active: true,
  },
];

export const MOCK_DEPARTMENTS = [
  "Obstetrics & Gynecology",
  "General Consultant",
  "General Medicine",
  "Critical Care",
  "General & Laparoscopy Surgery",
  "General Surgery",
  "Urology",
  "Anesthesia",
];

export const MOCK_DOCTORS_BY_DEPT = {
  "Obstetrics & Gynecology": [
    "Dr. Anand Prakash Tiwari",
    "Dr. Vandana",
    "Dr. Sadhana",
  ],
  "General Consultant": [
    "Dr. Akhilesh Singh",
  ],
  "General Medicine": [
    "Dr. Ankit Kumar Singh",
  ],
  "Critical Care": [
    "Dr. Umesh Kumar Singh",
  ],
  "General & Laparoscopy Surgery": [
    "Dr. Vishwanath Pratap Singh",
  ],
  "General Surgery": [
    "Dr. Yogendra Pandey",
  ],
  "Urology": [
    "Dr. Vikram Singh",
  ],
  "Anesthesia": [
    "Dr. Sushil Krishnamurti",
    "Dr. Vaibhav Shankar",
  ],
};
