import {Link, useParams} from "react-router-dom";
import {useBus} from "../hooks/useBus.ts";

export const BusDetail = () => {
    const {id} = useParams<{id: string}>();
    const {bus, loading, error} = useBus(id);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando detalles del bus...</p>
                </div>
            </div>
        );
    }

    if (error || !bus) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error al cargar el bus</h3>
                        <p className="mt-1 text-sm text-red-700">{error || "El bus no existe."}</p>
                        <Link
                            to="/"
                            className="mt-3 inline-block text-sm font-medium text-red-600 hover:text-red-800 underline">
                            Volver al listado
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mt-10">
            <div className="bg-blue-600 p-4">
                <h2 className="text-xl font-bold text-white">Detalle de Unidad: {bus.busNumber}</h2>
            </div>

            <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-gray-500 block">Placa</label>
                        <p className="font-semibold text-gray-800">{bus.plate}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 block">Marca</label>
                        <p className="font-semibold text-gray-800">{bus.brand.name}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 block">Fecha de Registro</label>
                        <p className="text-gray-800">{new Date(bus.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500 block">Estado</label>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${bus.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {bus.active ? 'ACTIVO' : 'INACTIVO'}
                        </span>
                    </div>
                </div>

                <div className="border-t pt-4">
                    <label className="text-sm text-gray-500 block">Características</label>
                    <p className="text-gray-700 italic">{bus.characteristics || "Sin descripción disponible"}</p>
                </div>
            </div>

            <div className="bg-gray-50 p-4 border-t text-right">
                <Link
                    to="/"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
                    Cerrar Pestaña
                </Link>
            </div>
        </div>
    );
};