import type {Bus} from "../types/bus.ts";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const busService = {
    getAllBuses: async (): Promise<Bus[]> => {
        const response = await fetch(`${API_BASE_URL}/bus`);
        if (!response.ok) throw new Error("Error al obtener los buses");
        return await response.json();
    },

    getBusById: async (id: number): Promise<Bus> => {
        const response = await fetch(`${API_BASE_URL}/bus/${id}`);
        if (!response.ok) throw new Error(`Error al obtener el bus con ID: ${id}`);
        return await response.json();
    }
}