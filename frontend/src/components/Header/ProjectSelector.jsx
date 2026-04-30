import { useState } from 'react';
import Dropdown from '../UI/Dropdown/Dropdown.jsx';

/**
 * ProjectSelector - Selector de proyectos para el header del dashboard.
 *
 * Renderiza un dropdown con la lista de proyectos disponibles.
 * El proyecto seleccionado se gestiona localmente (mock) hasta
 * que se conecte con la API.
 *
 * @returns {JSX.Element} Dropdown configurado para proyectos.
 *
 * @example
 * <ProjectSelector />
 */
function ProjectSelector() {
    /** Proyecto actualmente seleccionado. Vacío = placeholder visible. */
    const [selected, setSelected] = useState('');

    /** Lista de proyectos (mock). Reemplazar con fetch a API. */
    const projects = [
        'Supervisión Tren Querétaro Irapuato Tramo 1',
        'Supervisión Tren Maya Tramo 2',
        'Puente Chiapas',
        'Hospital Regional Oaxaca',
    ];

    return (
        <Dropdown
            options={projects}
            selected={selected}
            onSelect={setSelected}
            placeholder="Seleccionar Proyecto"
        />
    );
}

export default ProjectSelector;