import { API_URL } from "../config/config";

interface FetchDataProps {
  urlParams: string;
  method: string;
  body?: Record<string, any>;
}
export const fetchData = async ({ urlParams, method, body }: FetchDataProps) => {
  try {
    const res = await fetch(`${API_URL}/${urlParams}`, {
      method: method,
      headers: {
        "Content-Type": "application/json", // Default to JSON
        // "X-CSRF-TOKEN": csrfToken, // Include CSRF token
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    console.log(res)
    let data;
    if (res.status !== 200) {
      data = { message: `response: ${res.statusText}`, status: res.status }
      return data
    }
    data = await res.json();
    return data
  } catch (error) {
    throw new Error("Something went wrong!")
  }
};