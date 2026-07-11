const { GoogleGenAI } = require("@google/genai");

if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing in .env");
}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const generateResponse = async (prompt) => {
    try {

        const response = await ai.models.generateContent({
            model: process.env.GEMINI_MODEL,
            contents: prompt,
        });

        return response.text;

    } catch (error) {

        console.error("\n========== GEMINI ERROR ==========");
        console.error(error);
        console.error("==================================\n");

        throw error;
    }
};

module.exports = generateResponse;