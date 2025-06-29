const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: string | FormData;
  signal?: AbortSignal;
}

const fetchInstance = async (endpoint: string, options: FetchOptions = {}) => {
  const token = localStorage.getItem("auth-token");
  const isForm = options.body instanceof FormData;

  const headers = {
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(isForm ? {} : { "Content-Type": "application/json" }),
  };

  const config = {
    ...options,
    headers: { ...headers, ...options.headers },
  };

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Client Error:", error);
    throw error;
  }
};

export default fetchInstance;
