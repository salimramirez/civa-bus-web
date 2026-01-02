export const Pagination = ({ currentPage, totalPages, onNext, onPrevious, disabled = false }: {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
    disabled?: boolean;
}) => {
    return (
        <div className="mt-6 flex gap-3 items-center justify-center">
            <button
                onClick={onPrevious}
                disabled={currentPage === 0 || disabled}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 shadow-sm">
                Anterior
            </button>
            <span className="text-sm text-gray-700 font-medium">
                Página {currentPage + 1} de {totalPages}
            </span>
            <button
                onClick={onNext}
                disabled={currentPage >= totalPages - 1 || disabled}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 shadow-sm">
                Siguiente
            </button>
        </div>
    );
};

