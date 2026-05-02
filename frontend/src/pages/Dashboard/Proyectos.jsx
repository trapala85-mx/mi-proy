import ProjectTable from '../../components/Projects/ProjectTable.jsx';

/**
 * Proyectos.jsx
 *
 * Página de Gestión de Proyectos del dashboard de SICFO.
 * Orquesta el módulo completo mostrando la tabla de proyectos
 * con funcionalidad CRUD (alta, edición, desactivación).
 *
 * @component
 * @example
 * return (
 *   <Proyectos />
 * )
 */

function Proyectos() {
    return (
        <section className="flex flex-col h-full p-8">
            <ProjectTable />
        </section>
    );
}

export default Proyectos;