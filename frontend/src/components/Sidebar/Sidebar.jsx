import { useState } from 'react';
import SidebarHeader from './SidebarHeader.jsx';
import NavMenu from './NavMenu.jsx';

/**
 * Sidebar - Barra lateral de navegación del dashboard SICFO.
 *
 * Orquesta el estado del módulo activo y renderiza el encabezado
 * junto con el menú de navegación. Los items están hardcodeados
 * hasta que se conecte con la API o configuración dinámica.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onModuleChange - Callback que recibe el ID del módulo seleccionado.
 *
 * @returns {JSX.Element} Barra lateral completa.
 *
 * @example
 * <Sidebar onModuleChange={(id) => console.log('Módulo:', id)} />
 */

function Sidebar({ onModuleChange }) {
    /** ID del módulo actualmente activo. */
    const [activeId, setActiveId] = useState('home');

    /**
     * Lista de módulos disponibles en el sistema.
     * TODO: Reemplazar con fetch a API cuando el backend esté listo.
     */
    const modules = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'proyectos', label: 'Proyectos', icon: '📁' },
        { id: 'instrumentos', label: 'Instrumentos Legales', icon: '📄' },
        { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
    ];

    /**
     * Maneja la selección de un módulo.
     * Actualiza el estado local y notifica al padre.
     *
     * @param {string} id - ID del módulo seleccionado.
     */
    const handleSelect = (id) => {
        setActiveId(id);
        if (onModuleChange) {
            onModuleChange(id);
        }
    };

    return (
        <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
            <SidebarHeader />
            <NavMenu
                items={modules}
                activeId={activeId}
                onSelect={handleSelect}
            />
        </aside>
    );
}

export default Sidebar;