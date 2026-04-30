/**
 * DropdownButton - Botón que abre/cierra el menú desplegable.
 *
 * Muestra el texto seleccionado o el placeholder, junto con una flecha
 * indicadora del estado (abierto/cerrado).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.selected - Opción actualmente seleccionada.
 * @param {string} props.placeholder - Texto por defecto si nada está seleccionado.
 * @param {boolean} props.isOpen - Estado actual del menú (true=abierto, false=cerrado).
 * @param {Function} props.onToggle - Callback que alterna el estado abierto/cerrado.
 *
 * @example
 * <DropdownButton
 *   selected="Proyecto A"
 *   placeholder="Seleccionar"
 *   isOpen={false}
 *   onToggle={() => setIsOpen(!isOpen)}
 * />
 */
function DropdownButton({ selected, placeholder, isOpen, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className="text-gray-300 hover:text-white text-base font-medium flex items-center gap-1 transition-colors"
        >
            <span className="truncate whitespace-nowrap max-w-[350px]">
                {selected || placeholder}
            </span>
            <span className="text-xs">{isOpen ? '▲' : '▼'}</span>
        </button>
    );
}

export default DropdownButton;