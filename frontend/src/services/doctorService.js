import api from './api';
import { MOCK_DOCTORS } from '../data/mockData';
import { stripHindiText, normalizeDepartmentName } from '../utils/textUtils';

/**
 * Safely normalize a doctor object from DocBot backend -> UI format.
 * Strips out Hindi translations (/ ... ) so frontend translate plugins work cleanly.
 */
export function normalizeDoctor(d) {
  if (!d) return null;
  const rawSpecialty = d.specialty || d.AOF || d.specialization || d.role || '';
  const specialtyStr = Array.isArray(rawSpecialty)
    ? rawSpecialty.join(', ')
    : String(rawSpecialty);

  const rawDept = d.department || (typeof d.departmentId === 'object' ? d.departmentId?.name : '') || 'General Medicine';

  return {
    id: d.id || d._id || String(Math.random()),
    name: stripHindiText(d.name || 'Doctor'),
    role: stripHindiText(d.role || d.specialization || d.department || 'Specialist'),
    department: normalizeDepartmentName(rawDept),
    qualification: stripHindiText(d.qualification || d.qualifications || 'MBBS'),
    experience: typeof d.experience === 'number' ? `${d.experience}+ Years` : stripHindiText(d.experience || '5+ Years'),
    image: d.image || d.ImageUrl || d.imageUrl || 'https://i.pinimg.com/1200x/72/41/a3/7241a3fe9d1687bd6c2a8ce55ca348ce.jpg',
    specialty: stripHindiText(specialtyStr || 'General Medical Consultation'),
    consultation_fee: d.consultationFee ?? d.consultation_fee ?? 0,
    gender: d.gender || '',
    phone: d.phone || '',
    is_active: d.isActive ?? d.is_active ?? true,
  };
}

export const doctorService = {
  /**
   * Fetch doctors directly from GET /api/doctors
   */
  async getDoctors() {
    const response = await api.get('/doctors');
    const rawData = Array.isArray(response.data)
      ? response.data
      : (response.data?.doctors || response.data?.data || []);

    if (!Array.isArray(rawData)) {
      throw new Error("Invalid API response format for /api/doctors");
    }

    return rawData.map(normalizeDoctor).filter((d) => d.is_active !== false);
  },

  /**
   * Fetch single doctor by ID directly from GET /api/doctors/:id
   */
  async getDoctorById(id) {
    const response = await api.get(`/doctors/${id}`);
    if (response.data) {
      return normalizeDoctor(response.data);
    }
    throw new Error(`Doctor not found with ID: ${id}`);
  },

  /**
   * Helper to retrieve static mock doctors dataset from mockData.js if explicitly requested
   */
  getMockDoctors() {
    return MOCK_DOCTORS.map(normalizeDoctor);
  },
};

export default doctorService;
