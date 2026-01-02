import { useState } from "react";
import { useBuses } from "../hooks/useBuses.ts";
import { Pagination } from "./Pagination.tsx";
import "../styles/BusTable.css";

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

            <div className="bus-table-container">
                <table className="bus-table">
                    <thead className="bus-table-thead">
                        <tr>
                            <th className="bus-table-th">ID</th>
                            <th className="bus-table-th">Número de Bus</th>
                            <th className="bus-table-th">Placa</th>
                            <th className="bus-table-th">Fecha de Creación</th>
                            <th className="bus-table-th">Marca</th>
                            <th className="bus-table-th">Características</th>
                            <th className="bus-table-th">Estado</th>
                            <th className="bus-table-th">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bus-table-tbody">
                        {buses.length > 0 ? (
                            buses.map((bus) => (
                                <tr key={bus.id} className="bus-table-tr">
                                    <td className="bus-table-td">{bus.id}</td>
                                    <td className="bus-table-td">{bus.busNumber}</td>
                                    <td className="bus-table-td">{bus.plate}</td>
                                    <td className="bus-table-td">
                                        {new Date(bus.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="bus-table-td">{bus.brand.name}</td>
                                    <td className="bus-table-td">{bus.characteristics}</td>
                                    <td className="bus-table-td">
                                        <span className={`bus-badge ${bus.active ? 'bus-badge-active' : 'bus-badge-inactive'}`}>
                                            {bus.active ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </td>
                                    <td className="bus-table-td">
                                        <button className="bus-action-btn">
                                            Ver detalle
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="bus-table-td-empty">
                                    No hay buses disponibles.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

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