import { useState } from "react";
import { useBuses } from "../hooks/useBuses.ts";
import { Pagination } from "./Pagination.tsx";

export const BusTable = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { buses, loading, error, totalPages } = useBuses(currentPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 0) setCurrentPage(prev => prev - 1);
    };

    if (loading) return <div>Cargando buses...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div className="table-container">
            <h2>Listado de Buses</h2>

            <table border={1} style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
                <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                    <th>ID</th>
                    <th>Número de Bus</th>
                    <th>Placa</th>
                    <th>Fecha de Creación</th>
                    <th>Marca</th>
                    <th>Características</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                {buses.length > 0 ? (
                    buses.map((bus) => (
                        <tr key={bus.id}>
                            <td>{bus.id}</td>
                            <td>{bus.busNumber}</td>
                            <td>{bus.plate}</td>
                            <td>{new Date(bus.createdAt).toLocaleDateString()}</td>
                            <td>{bus.brand.name}</td>
                            <td>{bus.characteristics}</td>
                            <td>
                                    <span style={{ color: bus.active ? 'green' : 'red' }}>
                                        {bus.active ? 'Activo' : 'Inactivo'}
                                    </span>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={7} style={{ textAlign: 'center' }}>No hay buses disponibles.</td>
                    </tr>
                )}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={handleNext}
                onPrevious={handlePrevious}
                disabled={loading}
            />
        </div>
    );
};