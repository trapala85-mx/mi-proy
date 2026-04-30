import { useState } from 'react';

function ProjectSelector() {
    const [selected, setSelected] = useState('Seleccionar Proyecto');
    const [isOpen, setIsOpen] = useState(false);

    const projects = [
        'Tren Querétaro Irapuato Tramo 1',
        'Carretera México-Puebla',
        'Puente Chiapas',
        'Hospital Regional Oaxaca',
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white text-base font-medium flex items-center gap-1 transition-colors"
            >
                <span className="truncate whitespace-nowrap">{selected}</span>
                <span className="text-xs">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 w-64 bg-gray-700 rounded-lg shadow-xl z-50 border border-gray-600">
                    <div className="px-3 py-2 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-600">
                        Seleccionar proyecto
                    </div>
                    {projects.map((project) => (
                        <button
                            key={project}
                            onClick={() => {
                                setSelected(project);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-base transition-colors ${selected === project
                                ? 'bg-gray-600 text-white'
                                : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                                }`}
                        >
                            {project}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectSelector;