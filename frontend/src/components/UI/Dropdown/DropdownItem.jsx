/**
 * DropdownItem - Opción individual del menú desplegable.
 *
 * Renderiza un botón clickeable que representa una opción del dropdown.
 * Aplica estilos diferenciados si la opción está seleccionada.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.option - Texto de la opción a mostrar.
 * @param {string} props.selected - Opción actualmente seleccionada (para comparar).
 * @param {Function} props.onSelect - Callback que recibe la opción elegida.
 * @param {Function} props.onClose - Callback que cierra el menú desplegable.
 *
 * @example
 * <DropdownItem
 *   option="Proyecto A"
 *   selected="Proyecto A"
 *   onSelect={(opt) => console.log(opt)}
 *   onClose={() => setIsOpen(false)}
 * />
 */
function DropdownItem({ option, selected, onSelect, onClose }) {
    const isSelected = selected === option;

    return (
        <button
            onClick={() => {
                onSelect(option);
                onClose();
            }}
            className={`w-full text-left px-3 py-2 text-base transition-colors ${isSelected
                ? 'bg-gray-600 text-white'
                : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
        >
            {option}
        </button>
    );
}

export default DropdownItem;