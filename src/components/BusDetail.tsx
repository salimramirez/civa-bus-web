import {Link, useParams} from "react-router-dom";
import {useBus} from "../hooks/useBus.ts";

export const BusDetail = () => {
    const {id} = useParams<{id: string}>();
    const {bus, loading, error} = useBus(id);

    if (loading) {
        return <div className="p-8 text-center">Cargando detalles del bus...</div>;
    }

    if (error || !bus) {
        return (
            <div className="p-8 text-center text-red-600">
                <p>{error || "El bus no existe."}</p>
                <Link to="/" className="text-blue-600 underline">Volver al listado</Link>
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