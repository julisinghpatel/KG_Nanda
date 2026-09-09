import axios from 'axios';

/**
 * Centralized Axios client instance for KG_Nanda frontend.
 * Communicates with DocBot API backend via VITE_API_BASE_URL.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Automatically attach Bearer token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('docbot_token') || localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Graceful error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Network request failed. Please check backend connection.';
    console.warn('API Response Warning/Error:', message);
    return Promise.reject(error);
  }
);

export default api;
