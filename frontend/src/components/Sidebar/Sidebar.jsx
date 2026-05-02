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
 * <Sidebar onModuleChange={(key) => console.log('Módulo:', key)} />
 */

function Sidebar({ onModuleChange }) {
    /** Key del módulo actualmente activo. */
    const [activeKey, setActiveKey] = useState('home');

    /**
     * Lista de módulos disponibles en el sistema.
     * TODO: Reemplazar con fetch a API cuando el backend esté listo.
     */
    const modules = [
        { key: 'home', label: 'Home', icon: '🏠' },
        { key: 'proyectos', label: 'Proyectos', icon: '📁' },
        { key: 'instrumentos', label: 'Instrumentos Legales', icon: '📄' },
        { key: 'configuracion', label: 'Configuración', icon: '⚙️' },
    ];

    /**
     * Maneja la selección de un módulo.
     * Actualiza el estado local y notifica al padre.
     *
     * @param {string} key - Key del módulo seleccionado.
     */
    const handleSelect = (key) => {
        setActiveKey(key);
        if (onModuleChange) {
            onModuleChange(key);
        }
    };

    return (
        <aside className="w-64 bg-bg-sidebar border-r border-border-default flex flex-col">
            <SidebarHeader />
            <NavMenu
                items={modules}
                activeKey={activeKey}
                onSelect={handleSelect}
            />
        </aside>
    );
}

export default Sidebar;