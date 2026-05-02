/**
 * ProjectNameCell - Celda que muestra el nombre de un proyecto.
 *
 * Renderiza el nombre del proyecto dentro de una celda de tabla.
 * Es un componente puro de presentación.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre del proyecto a mostrar.
 *
 * @returns {JSX.Element} Celda con el nombre del proyecto.
 *
 * @example
 * <ProjectNameCell name="Supervisión Tren Maya Tramo 2" />
 */
function ProjectNameCell({ name }) {
    return (
        <td className="px-6 py-4 text-text-primary">
            {name}
        </td>
    );
}

export default ProjectNameCell;