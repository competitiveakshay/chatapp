import { GoogleGenAI } from '@google/genai';

// Initialize the Google Gen AI client using Vite environment variables
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

async function main(prompt) {
    try {
        // Correct SDK syntax for generating content
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash', // Use the standard, reliable flash model
            contents: prompt,
            config: {
                // To activate Google Search grounding, use the correct object key
                tools: [{ googleSearch: {} }], 
                temperature: 1,
            }
        });

        // The text answer is stored inside response.text
        console.log("Gemini Response:", response.text);
        return response.text; 
        
    } catch (error) {
        console.error("Gemini API Error details:", error);
        throw error;
    }
}

export default main;
