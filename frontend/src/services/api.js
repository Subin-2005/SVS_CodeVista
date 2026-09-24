import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000,
});

/**
 * Submit project enquiry / contact form to Django backend
 * @param {Object} formData
 * @returns {Promise<Object>}
 */
export const submitContactEnquiry = async (formData) => {
  try {
    const response = await apiClient.post('/contact/', formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw {
      success: false,
      message: error.message || 'Network error. Please ensure the Django backend server is running.',
    };
  }
};

/**
 * Check backend API health status
 * @returns {Promise<Object>}
 */
export const checkApiHealth = async () => {
  try {
    const response = await apiClient.get('/health/');
    return response.data;
  } catch (error) {
    return {
      status: 'offline',
      error: error.message,
    };
  }
};

/**
 * Fetch company information from backend
 * @returns {Promise<Object>}
 */
export const getCompanyInfo = async () => {
  try {
    const response = await apiClient.get('/info/');
    return response.data;
  } catch (error) {
    return null;
  }
};

export default apiClient;
