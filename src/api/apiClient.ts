const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";
const USER = import.meta.env.VITE_API_USER || "civa_user";
const PASS = import.meta.env.VITE_API_PASS || "civa_password";

const authHeader = 'Basic ' + btoa(`${USER}:${PASS}`);

export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });
    if (!response.ok) {
        throw new Error(`Error en la solicitud a ${endpoint}: ${response.statusText}`);
    }
    return await response.json();
};