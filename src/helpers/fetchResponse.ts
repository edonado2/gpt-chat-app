import axios, { AxiosResponse } from "axios";

const OPENAI_API_KEY = "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";

const config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
    }
};

export const getResponse = async (url: string, retries = 5, delay = 1000): Promise<any> => {
    const data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test!" }],
        temperature: 0.7
    };

    try {
        const response: AxiosResponse<any> = await axios.post(url, data, config);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 429 && retries > 0) {
            console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
            return getResponse(url, retries - 1, delay * 2);
        } else {
            console.error("Error making the request:", error);
            throw error;
        }
    }
};
