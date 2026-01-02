interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
    disabled?: boolean;
}

export const Pagination = ({ currentPage, totalPages, onNext, onPrevious, disabled = false }: PaginationProps) => {
    return (
        <div style={{ marginTop: '1rem', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={onPrevious} disabled={currentPage === 0 || disabled}>
                Anterior
            </button>
            <span>Página {currentPage + 1} de {totalPages}</span>
            <button onClick={onNext} disabled={currentPage >= totalPages - 1 || disabled}>
                Siguiente
            </button>
        </div>
    );
};

