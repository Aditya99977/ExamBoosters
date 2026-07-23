import api from "./api";

// ===============================
// Get All Mock Tests
// ===============================
export const getMockTests = async () => {
  const response = await api.get("/mocktests");
  return response.data;
};

// ===============================
// Get Single Mock Test
// ===============================
export const getMockTestById = async (id) => {
  const response = await api.get(`/mocktests/${id}`);

  return response.data;
};

// ===============================
// Create Mock Test
// ===============================
export const createMockTest = async (mockTestData) => {
  const response = await api.post("/mocktests", mockTestData);

  return response.data;
};

// ===============================
// Update Mock Test
// ===============================
export const updateMockTest = async (id, mockTestData) => {
  const response = await api.put(`/mocktests/${id}`, mockTestData);

  return response.data;
};

// ===============================
// Delete Mock Test
// ===============================
export const deleteMockTest = async (id) => {
  const response = await api.delete(`/mocktests/${id}`);

  return response.data;
};

// ===============================
// Publish / Unpublish Mock Test
// ===============================
export const toggleMockTestStatus = async (id) => {
  const response = await api.patch(`/mocktests/${id}/status`, {});

  return response.data;
};

// ===============================
// Get Mock Test Statistics
// ===============================
export const getMockTestStatistics = async () => {
  const response = await api.get("/mocktests/statistics");

  return response.data;
};
