/**
 * ProjectActionsCell - Celda con botones de acción para un proyecto.
 *
 * Renderiza iconos de Editar (✏️) y Eliminar (❌) como emojis.
 *
 * @param {Object} props
 * @param {Function} props.onEdit - Callback al hacer clic en Editar.
 * @param {Function} props.onDelete - Callback al hacer clic en Eliminar.
 *
 * @returns {JSX.Element}
 *
 * @example
 * <ProjectActionsCell onEdit={edit} onDelete={remove} />
 */
function ProjectActionsCell({ onEdit, onDelete }) {
    return (
        <td className="px-6 py-4">
            <div className="flex gap-2 justify-end">
                {/* Icono Editar */}
                <button
                    onClick={onEdit}
                    className="p-2 rounded-md bg-bg-card text-text-secondary hover:bg-accent hover:text-active-text transition-all duration-200"
                    title="Editar"
                >
                    ✏️
                </button>

                {/* Icono Eliminar */}
                <button
                    onClick={onDelete}
                    className="p-2 rounded-md bg-bg-card text-text-secondary hover:bg-danger hover:text-white transition-all duration-200"
                    title="Desactivar"
                >
                    ❌
                </button>
            </div>
        </td>
    );
}

export default ProjectActionsCell;