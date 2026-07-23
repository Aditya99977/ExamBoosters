import api from "./api";

// Upload Paper
export const uploadPaper = async (paperData) => {
  const response = await api.post("/papers", paperData);
  return response.data;
};

// Get All Papers
export const getAllPapers = async () => {
  const response = await api.get("/papers");
  return response.data;
};

// Get Single Paper
export const getPaperById = async (id) => {
  const response = await api.get(`/papers/${id}`);
  return response.data;
};

// Update Paper
export const updatePaper = async (id, paperData) => {
  const response = await api.put(`/papers/${id}`, paperData);
  return response.data;
};

// Delete Paper
export const deletePaper = async (id) => {
  const response = await api.delete(`/papers/${id}`);
  return response.data;
};

// Download Paper
export const downloadPaper = async (id) => {
  const response = await api.get(
    `/papers/download/${id}`,
    {
      responseType: "blob",
    }
  );

  return response;
};

// Paper Statistics
export const getPaperStatistics = async () => {
  const response = await api.get("/papers/statistics");

  return response.data;
};
