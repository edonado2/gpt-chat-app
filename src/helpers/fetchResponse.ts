import axios, { AxiosResponse } from "axios";

const API_KEY = import.meta.env.VITE_OPEN_AI_API;

if (!API_KEY) {
    throw new Error("API key is missing. Please check your environment variables.");
}

const config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }
};

interface GetResponseData {
    model?: string;
    messages: { role: string; content: string }[];
    temperature?: number;
}

export const getResponse = async (
    url: string,
    data: GetResponseData,
    retries = 5,
    delay = 1000
): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.post(url, data, config);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 429 && retries > 0) {
                console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
                await new Promise(res => setTimeout(res, delay));
                return getResponse(url, data, retries - 1, delay * 2);
            } else {
                console.error("Error response from server:", error.response);
                throw new Error(`Error: ${error.response.status} ${error.response.statusText}`);
            }
        } else if (error.request) {
            console.error("No response received:", error.request);
            throw new Error("No response received from server.");
        } else {
            console.error("Error setting up request:", error.message);
            throw new Error("Error setting up request.");
        }
    }
};
