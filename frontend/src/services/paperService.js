import axios from "axios";

const API_URL = "http://localhost:5000/api/papers";

// Get JWT Token
const getToken = () => {
  return localStorage.getItem("token");
};

// Axios Config
const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "multipart/form-data",
  },
});

// Upload Paper
export const uploadPaper = async (paperData) => {
  const response = await axios.post(API_URL, paperData, authConfig());
  return response.data;
};

// Get All Papers
export const getAllPapers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get Single Paper
export const getPaperById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update Paper
export const updatePaper = async (id, paperData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    paperData,
    authConfig()
  );
  return response.data;
};

// Delete Paper
export const deletePaper = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    authConfig()
  );
  return response.data;
};

// Download Paper
export const downloadPaper = async (id) => {
  const response = await axios.get(
    `${API_URL}/download/${id}`,
    {
      responseType: "blob",
    }
  );

  return response;
};

// Paper Statistics
export const getPaperStatistics = async () => {
  const response = await axios.get(
    `${API_URL}/statistics`,
    authConfig()
  );

  return response.data;
};