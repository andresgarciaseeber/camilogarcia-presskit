import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set the API_KEY environment variable.");
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Edits an image based on a text prompt using Gemini 2.5 Flash Image.
 * @param base64Image The source image in base64 format (no data URI prefix needed for API, but handled in function).
 * @param prompt The text instruction for the edit.
 * @returns The generated image in base64 format.
 */
export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = getAiClient();

  // Ensure strict base64 string without data prefix
  const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64,
            },
          },
        ],
      },
    });

    // Extract the image from the response
    // The response for image generation usually contains inlineData in the parts
    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/jpeg;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No image generated.");
  } catch (error) {
    console.error("Gemini Image Edit Error:", error);
    throw error;
  }
};