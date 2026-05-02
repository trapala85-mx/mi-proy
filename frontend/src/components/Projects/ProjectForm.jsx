import { useState, useEffect } from 'react';
import { projectFields } from './config/projectFields.js';
import FormField from './FormField.jsx';

/**
 * ProjectForm - Formulario puro de proyecto.
 *
 * Maneja el estado del formulario y su validación.
 * No sabe nada de modales ni de dónde se renderiza.
 *
 * @param {Object} props
 * @param {Object|null} props.project - Proyecto a editar, o null para alta.
 * @param {Function} props.onSave - Callback al guardar. Recibe formData.
 * @param {Function} props.onCancel - Callback al cancelar.
 *
 * @returns {JSX.Element}
 */
function ProjectForm({ project, onSave, onCancel }) {
    const [formData, setFormData] = useState({});
    const isEditing = project !== null;

    useEffect(() => {
        const initial = {};
        projectFields.forEach((f) => {
            initial[f.key] = isEditing && project[f.key] ? project[f.key] : '';
        });
        setFormData(initial);
    }, [project, isEditing]);

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const field of projectFields) {
            if (field.required && !formData[field.key]?.trim()) return;
        }
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {projectFields.map((field) => (
                <FormField
                    key={field.key}
                    field={field}
                    value={formData[field.key]}
                    onChange={handleChange}
                />
            ))}

            <div className="flex gap-3 justify-end mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-card transition-all"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-accent text-active-text font-medium hover:bg-accent-hover transition-all"
                >
                    {isEditing ? 'Guardar Cambios' : 'Crear Proyecto'}
                </button>
            </div>
        </form>
    );
}

export default ProjectForm;