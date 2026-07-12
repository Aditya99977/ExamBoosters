import api from "./api";

// ==============================
// Send Message to AI
// ==============================
export const sendMessage = async ({ exam, subject, message }) => {
    try {
        const response = await api.post("/ai/chat", {
            exam,
            subject,
            message,
        });

        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Failed to communicate with AI.",
            }
        );
    }
};

// ==============================
// Get Chat History
// ==============================
export const getChatHistory = async () => {
    try {
        const response = await api.get("/ai/history");
        return response.data;
    } catch (error) {
        throw (
            error.response?.data || {
                message: "Unable to fetch chat history.",
            }
        );
    }
};