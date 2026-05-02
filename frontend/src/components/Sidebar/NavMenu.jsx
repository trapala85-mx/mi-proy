import NavItem from './NavItem.jsx';

/**
 * NavMenu - Contenedor de la lista de navegación del sidebar.
 *
 * Renderiza un conjunto de NavItem basado en un array de módulos.
 * Cada módulo define su label, icono y estado activo.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<{label: string, icon: string, id: string}>} props.items - Lista de módulos.
 * @param {string} props.activeKey - Key del módulo actualmente activo.
 * @param {Function} props.onSelect - Callback que recibe el Key del módulo seleccionado.
 *
 * @example
 * <NavMenu
 *   items={[
 *     { key: 'home', label: 'Home', icon: '🏠' },
 *     { key: 'proyectos', label: 'Proyectos', icon: '📁' },
 *   ]}
 *   activeId="home"
 *   onSelect={(key) => setActive(key)}
 * />
 */
function NavMenu({ items, activeKey, onSelect }) {
    return (
        <nav className="flex flex-col gap-1 px-2">
            {items.map((item) => (
                <NavItem
                    key={item.key}
                    label={item.label}
                    icon={item.icon}
                    isActive={activeKey === item.key}
                    onClick={() => onSelect(item.key)}
                />
            ))}
        </nav>
    );
}

export default NavMenu;