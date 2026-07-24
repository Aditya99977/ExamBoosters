import api from "./api";

// =============================================
// Get All Exams
// =============================================
export const getAllExams = async () => {
    const response = await api.get("/exams");
    return response.data;
};

// =============================================
// Select Preferred Exam
// =============================================
export const selectPreferredExam = async (examId) => {
    const response = await api.put("/exams/select", {
        examId,
    });

    return response.data;
};