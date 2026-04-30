import NavItem from './NavItem.jsx';

/**
 * NavMenu - Contenedor de la lista de navegación del sidebar.
 *
 * Renderiza un conjunto de NavItem basado en un array de módulos.
 * Cada módulo define su label, icono y estado activo.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<{label: string, icon: string, id: string}>} props.items - Lista de módulos.
 * @param {string} props.activeId - ID del módulo actualmente activo.
 * @param {Function} props.onSelect - Callback que recibe el ID del módulo seleccionado.
 *
 * @example
 * <NavMenu
 *   items={[
 *     { id: 'home', label: 'Home', icon: '🏠' },
 *     { id: 'proyectos', label: 'Proyectos', icon: '📁' },
 *   ]}
 *   activeId="home"
 *   onSelect={(id) => setActive(id)}
 * />
 */
function NavMenu({ items, activeId, onSelect }) {
    return (
        <nav className="flex flex-col gap-1 px-2">
            {items.map((item) => (
                <NavItem
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    isActive={activeId === item.id}
                    onClick={() => onSelect(item.id)}
                />
            ))}
        </nav>
    );
}

export default NavMenu;