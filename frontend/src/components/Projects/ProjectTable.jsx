import ProjectRow from './ProjectRow.jsx';
import ProjectFormModal from './ProjectFormModal.jsx';
import DeleteConfirmModal from './DeleteConfirmModal.jsx';
import { useProjects } from '../../hooks/useProjects.js';

/**
 * ProjectTable - Tabla completa de gestión de proyectos.
 *
 * Solo maneja la UI. Toda la lógica está en useProjects.
 *
 * @returns {JSX.Element}
 *
 * @example
 * <ProjectTable />
 */
function ProjectTable() {
    const {
        projects,
        editingProject,
        deletingProject,
        formModal,
        deleteModal,
        openAddForm,
        openEditForm,
        openDeleteConfirm,
        saveProject,
        confirmDelete,
    } = useProjects();

    return (
        <div className="w-full">
            {/* Encabezado con botón agregar */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">
                    Listado de Proyectos
                </h2>
                <button
                    onClick={openAddForm}
                    className="px-4 py-2 rounded-md bg-accent text-active-text font-medium hover:bg-accent-hover transition-all duration-200"
                >
                    + Agregar Proyecto
                </button>
            </div>

            {/* Tabla de proyectos */}
            <div className="border border-border-default rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-bg-card">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">
                                Nombre del Proyecto
                            </th>
                            <th className="px-6 py-3 text-right text-sm font-semibold text-text-secondary uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-default">
                        {projects.map((project) => (
                            <ProjectRow
                                key={project.id}
                                project={project}
                                onEdit={openEditForm}
                                onDelete={openDeleteConfirm}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modales */}
            <ProjectFormModal
                project={editingProject}
                isOpen={formModal.isOpen}
                onClose={formModal.close}
                onSave={saveProject}
            />

            <DeleteConfirmModal
                project={deletingProject}
                isOpen={deleteModal.isOpen}
                onClose={deleteModal.close}
                onConfirm={confirmDelete}
            />
        </div>
    );
}

export default ProjectTable;