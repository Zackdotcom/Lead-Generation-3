import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * edits/generates an image based on an input image and a text prompt using Gemini 2.5 Flash Image.
 * @param base64Image The base64 string of the source image (including data URI scheme or raw).
 * @param prompt The text instruction for the edit (e.g., "Add a retro filter").
 * @returns The base64 string of the resulting image.
 */
export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string | null> => {
  try {
    // 1. Prepare the image data. Ensure we strip the data URI prefix if present.
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
    // Determine mime type from the header if possible, default to png if raw
    let mimeType = "image/png";
    const match = base64Image.match(/^data:(image\/\w+);base64,/);
    if (match) {
      mimeType = match[1];
    }

    // 2. Call the API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // aka nano banana
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
          {
            text: `Edit this image: ${prompt}`,
          },
        ],
      },
    });

    // 3. Extract the image from the response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const resultBase64 = part.inlineData.data;
        // The API returns raw base64, usually PNG or JPEG. We assume PNG for display if not specified, 
        // but typically it matches requested or default.
        return `data:image/png;base64,${resultBase64}`;
      }
    }
    
    console.warn("No image data found in response");
    return null;

  } catch (error) {
    console.error("Error editing image with Gemini:", error);
    throw error;
  }
};