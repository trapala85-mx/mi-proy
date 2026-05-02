/**
 * DeleteConfirmModal - Modal emergente para confirmar desactivación de proyecto.
 *
 * Renderiza un mensaje de confirmación sobre un overlay oscuro.
 * El proyecto no se elimina realmente, solo se desactiva en el backend.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.project - Proyecto a desactivar, o null si no hay.
 * @param {string} [props.project.name] - Nombre del proyecto.
 * @param {boolean} props.isOpen - true para mostrar el modal.
 * @param {Function} props.onClose - Callback para cerrar el modal.
 * @param {Function} props.onConfirm - Callback al confirmar. Recibe el proyecto.
 *
 * @returns {JSX.Element|null} Modal de confirmación, o null si está cerrado.
 *
 * @example
 * <DeleteConfirmModal
 *   isOpen={true}
 *   project={{ name: 'Tren Maya' }}
 *   onClose={close}
 *   onConfirm={(p) => console.log('Desactivar:', p)}
 * />
 */
function DeleteConfirmModal({ project, isOpen, onClose, onConfirm }) {
    /**
     * Cierra el modal al hacer clic en el overlay (fuera del contenido).
     *
     * @param {Event} e - Evento de clic.
     */
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-bg-header border border-border-default rounded-lg shadow-lg w-full max-w-sm mx-4 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">⚠️</span>
                    <h2 className="text-lg font-bold text-text-primary">
                        Confirmar Desactivación
                    </h2>
                </div>

                <p className="text-text-secondary mb-6">
                    ¿Estás seguro de que deseas desactivar el proyecto
                    <span className="text-text-primary font-medium"> "{project.name}"</span>?
                    Esta acción no eliminará el proyecto, solo lo marcará como inactivo.
                </p>

                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all duration-200"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            onConfirm(project);
                            onClose();
                        }}
                        className="px-4 py-2 rounded-md bg-danger text-white font-medium hover:bg-danger-hover transition-all duration-200"
                    >
                        Desactivar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmModal;