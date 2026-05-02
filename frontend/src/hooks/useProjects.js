import { useState } from 'react';
import { useModal } from './useModal.js';
import { mockProjects } from './mocks/projects.js';

export function useProjects() {
    const [projects, setProjects] = useState(mockProjects);
    const [editingProject, setEditingProject] = useState(null);
    const [deletingProject, setDeletingProject] = useState(null);
    const formModal = useModal();
    const deleteModal = useModal();

    const openAddForm = () => {
        setEditingProject(null);
        formModal.open();
    };

    const openEditForm = (project) => {
        setEditingProject(project);
        formModal.open();
    };

    const openDeleteConfirm = (project) => {
        setDeletingProject(project);
        deleteModal.open();
    };

    const saveProject = (formData) => {
        if (editingProject) {
            setProjects((prev) =>
                prev.map((p) => (p.id === editingProject.id ? { ...p, ...formData } : p))
            );
        } else {
            setProjects((prev) => [...prev, { id: `uuid-${Date.now()}`, ...formData }]);
        }
        setEditingProject(null);
        formModal.close();
    };

    const confirmDelete = () => {
        if (deletingProject) {
            console.log('Desactivar:', deletingProject.id);
        }
        setDeletingProject(null);
        deleteModal.close();
    };

    return {
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
    };
}