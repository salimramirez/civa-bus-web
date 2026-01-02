import { useEffect, useState } from "react";
import type { Bus } from "../types/bus.ts";
import { busService } from "../services/busService.ts";

export const useBuses = (currentPage: number) => {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                setLoading(true);
                const data = await busService.getAllBuses(currentPage);
                setBuses(data.content);
                setTotalPages(data.page.totalPages);
            } catch (error) {
                setError('No se pudieron cargar los buses.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        void fetchBuses();
    }, [currentPage]);

    return { buses, loading, error, totalPages };
};

