import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBuses } from "../hooks/useBuses.ts";
import { Pagination } from "./Pagination.tsx";
import "../styles/BusTable.css";

export const BusTable = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { buses, loading, error, totalPages } = useBuses(currentPage);
    const navigate = useNavigate();
    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 0) setCurrentPage(prev => prev - 1);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando buses...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error al cargar los datos</h3>
                        <p className="mt-1 text-sm text-red-700">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="table-container">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Listado de Buses</h2>

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
                                    <button
                                        className="bus-action-btn"
                                        onClick={() => navigate(`/bus/${bus.id}`)}>
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
                disabled={loading} />
        </div>
    );
};