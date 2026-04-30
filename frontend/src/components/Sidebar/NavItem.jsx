/**
 * NavItem - Item individual del menú lateral de navegación.
 *
 * Renderiza un botón con icono y texto. Aplica estilos diferenciados
 * cuando el item está activo (fondo verde lima) o inactivo (hover gris).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Texto visible del item (ej: "Home").
 * @param {string} props.icon - Emoji o icono SVG como string.
 * @param {boolean} props.isActive - true si este item está seleccionado.
 * @param {Function} props.onClick - Callback al hacer clic en el item.
 *
 * @example
 * <NavItem
 *   label="Home"
 *   icon="🏠"
 *   isActive={true}
 *   onClick={() => setActive('home')}
 * />
 */
function NavItem({ label, icon, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? 'bg-lime-400 text-gray-900'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
        >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
        </button>
    );
}

export default NavItem;