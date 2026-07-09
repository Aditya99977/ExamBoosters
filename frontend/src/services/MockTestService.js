import axios from "axios";

const API_URL = "http://localhost:5000/api/mocktests";

// Helper function to get auth headers
const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// ===============================
// Get All Mock Tests
// ===============================
export const getMockTests = async () => {
  const response = await axios.get(API_URL, getAuthConfig());
  return response.data;
};

// ===============================
// Get Single Mock Test
// ===============================
export const getMockTestById = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`,
    getAuthConfig()
  );

  return response.data;
};

// ===============================
// Create Mock Test
// ===============================
export const createMockTest = async (mockTestData) => {
  const response = await axios.post(
    API_URL,
    mockTestData,
    getAuthConfig()
  );

  return response.data;
};

// ===============================
// Update Mock Test
// ===============================
export const updateMockTest = async (id, mockTestData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    mockTestData,
    getAuthConfig()
  );

  return response.data;
};

// ===============================
// Delete Mock Test
// ===============================
export const deleteMockTest = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    getAuthConfig()
  );

  return response.data;
};

// ===============================
// Publish / Unpublish Mock Test
// ===============================
export const toggleMockTestStatus = async (id) => {
  const response = await axios.patch(
    `${API_URL}/${id}/status`,
    {},
    getAuthConfig()
  );

  return response.data;
};

// ===============================
// Get Mock Test Statistics
// ===============================
export const getMockTestStatistics = async () => {
  const response = await axios.get(
    `${API_URL}/statistics`,
    getAuthConfig()
  );

  return response.data;
};