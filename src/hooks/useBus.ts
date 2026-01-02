import { useEffect, useState } from "react";
import type { Bus } from "../types/bus.ts";
import {busService} from "../services/busService.ts";

export const useBus = (id: string | undefined) => {
    const [bus, setBus] = useState<Bus | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBus = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await busService.getBusById(Number(id));
                setBus(data);
            } catch (error) {
                setError('No se pudo cargar el bus.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        void fetchBus();
    }, [id]);

    return { bus, loading, error };
}

