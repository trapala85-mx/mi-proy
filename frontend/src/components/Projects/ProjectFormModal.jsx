import ProjectForm from './ProjectForm.jsx';

/**
 * ProjectFormModal - Modal emergente para crear o editar proyecto.
 *
 * Solo maneja el overlay y el contenedor. El formulario está en ProjectForm.
 *
 * @param {Object} props
 * @param {Object|null} props.project - Proyecto a editar, o null.
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {Function} props.onSave
 *
 * @returns {JSX.Element|null}
 */
function ProjectFormModal({ project, isOpen, onClose, onSave }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-bg-header border border-border-default rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold text-text-primary mb-6">
                    {project ? 'Editar Proyecto' : 'Agregar Proyecto'}
                </h2>

                <ProjectForm
                    project={project}
                    onSave={onSave}
                    onCancel={onClose}
                />
            </div>
        </div>
    );
}

export default ProjectFormModal;