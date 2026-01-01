export interface Brand {
    id: number;
    name: string;
}

export interface Bus {
    id: number
    busNumber: string;
    plate: string;
    createdAt: string;
    characteristics: string;
    brand: Brand;
    active: boolean;
}

export interface PaginatedResponse<T> {
    content: T[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    }
}