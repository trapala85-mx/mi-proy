import DropdownItem from './DropdownItem.jsx';

/**
 * DropdownMenu - Contenedor del menú desplegable.
 *
 * Renderiza la lista de opciones con un encabezado.
 * Solo se muestra cuando el dropdown está abierto (controlado por padre).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.options - Array de strings con las opciones disponibles.
 * @param {string} props.selected - Opción actualmente seleccionada.
 * @param {Function} props.onSelect - Callback que recibe la opción elegida.
 * @param {Function} props.onClose - Callback que cierra el menú.
 * @param {string} props.placeholder - Texto del encabezado del menú.
 *
 * @example
 * <DropdownMenu
 *   options={['A', 'B', 'C']}
 *   selected="A"
 *   onSelect={setSelected}
 *   onClose={() => setIsOpen(false)}
 *   placeholder="Seleccionar opción"
 * />
 */
function DropdownMenu({ options, selected, onSelect, onClose, placeholder }) {
    return (
        <div className="absolute top-full mt-2 w-64 bg-gray-700 rounded-lg shadow-xl z-50 border border-gray-600">
            <div className="px-3 py-2 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-600">
                {placeholder}
            </div>
            {options.map((option) => (
                <DropdownItem
                    key={option}
                    option={option}
                    selected={selected}
                    onSelect={onSelect}
                    onClose={onClose}
                />
            ))}
        </div>
    );
}

export default DropdownMenu;