import type {Bus, PaginatedResponse} from "../types/bus.ts";
import {apiClient} from "../api/apiClient.ts";

export const busService = {
    getAllBuses: (page: number = 0, size: number = 5) =>
        apiClient<PaginatedResponse<Bus>>(`/bus?page=${page}&size=${size}`),

    getBusById: (id: number) =>
        apiClient<Bus>(`/bus/${id}`)
}