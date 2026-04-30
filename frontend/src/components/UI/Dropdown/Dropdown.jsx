import { useState } from 'react';
import DropdownButton from './DropdownButton.jsx';
import DropdownMenu from './DropdownMenu.jsx';

/**
 * Dropdown - Componente reutilizable de menú desplegable.
 *
 * Orquesta el estado de apertura/cierre y coordina los sub-componentes.
 * Recibe datos y callbacks del padre para mantenerse desacoplado.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.options - Lista de opciones disponibles.
 * @param {string} props.selected - Opción actualmente seleccionada.
 * @param {Function} props.onSelect - Callback que recibe la opción elegida.
 * @param {string} props.placeholder - Texto mostrado cuando nada está seleccionado.
 *
 * @example
 * <Dropdown
 *   options={['A', 'B', 'C']}
 *   selected={valor}
 *   onSelect={setValor}
 *   placeholder="Seleccionar opción"
 * />
 */
function Dropdown({ options, selected, onSelect, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);

    /** Alterna el estado abierto/cerrado del menú. */
    const toggle = () => setIsOpen(!isOpen);

    /** Cierra el menú desplegable. */
    const close = () => setIsOpen(false);

    return (
        <div className="relative">
            <DropdownButton
                selected={selected}
                placeholder={placeholder}
                isOpen={isOpen}
                onToggle={toggle}
            />
            {isOpen && (
                <DropdownMenu
                    options={options}
                    selected={selected}
                    onSelect={onSelect}
                    onClose={close}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}

export default Dropdown;