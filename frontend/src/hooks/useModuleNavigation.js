import { useState } from 'react';

/**
 * Hook para manejar la navegación entre módulos del sidebar.
 *
 * Gestiona el estado del módulo activo y provee una función
 * para cambiarlo. Puede extenderse para persistir en localStorage
 * o sincronizar con la URL.
 *
 * @returns {Object} Estado y handler de navegación.
 * @returns {string} activeModule - ID del módulo actualmente activo.
 * @returns {Function} handleModuleChange - Función para cambiar de módulo.
 *
 * @example
 * const { activeModule, handleModuleChange } = useModuleNavigation();
 * <Sidebar onModuleChange={handleModuleChange} />
 * <main>{activeModule}</main>
 */
export function useModuleNavigation() {
    /** ID del módulo activo. Inicia en 'home'. */
    const [activeModule, setActiveModule] = useState('home');

    /**
     * Cambia el módulo activo.
     *
     * @param {string} id - ID del módulo seleccionado.
     */
    const handleModuleChange = (id) => {
        setActiveModule(id);
        //console.log('Módulo activo:', id);
    };

    return { activeModule, handleModuleChange };
}