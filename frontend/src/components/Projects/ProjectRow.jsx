import ProjectNameCell from './ProjectNameCell.jsx';
import ProjectActionsCell from './ProjectActionsCell.jsx';

/**
 * ProjectRow - Fila individual de la tabla de proyectos.
 *
 * Orquesta una fila de tabla compuesta por el nombre del proyecto
 * y las acciones disponibles (editar/eliminar).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.project - Datos del proyecto.
 * @param {string} props.project.id - ID único del proyecto (UUID del backend).
 * @param {string} props.project.name - Nombre del proyecto.
 * @param {Function} props.onEdit - Callback al hacer clic en Editar. Recibe el proyecto.
 * @param {Function} props.onDelete - Callback al hacer clic en Eliminar. Recibe el proyecto.
 *
 * @returns {JSX.Element} Fila de tabla con nombre y acciones.
 *
 * @example
 * <ProjectRow
 *   project={{ id: 'uuid-123', name: 'Tren Maya Tramo 2' }}
 *   onEdit={(p) => console.log('Editar:', p)}
 *   onDelete={(p) => console.log('Eliminar:', p)}
 * />
 */
function ProjectRow({ project, onEdit, onDelete }) {
    return (
        <tr className="border-b border-border-default hover:bg-bg-card transition-colors duration-200">
            <ProjectNameCell name={project.name} />
            <ProjectActionsCell
                onEdit={() => onEdit(project)}
                onDelete={() => onDelete(project)}
            />
        </tr>
    );
}

export default ProjectRow;