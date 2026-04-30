import Logo from './Logo.jsx';
import SystemTitle from './SystemTitle.jsx';
import ProjectSelector from './ProjectSelector.jsx';

/**
 * Header - Barra superior del dashboard SICFO.
 *
 * Orquesta el logo, título del sistema y selector de proyectos.
 * Mantiene una altura fija y separación visual con el contenido.
 *
 * @returns {JSX.Element} Barra superior completa.
 */
function Header() {
    return (
        <header className="h-16 bg-bg-header border-b-4 border-border-default flex items-center justify-between px-6 relative">
            {/* Logo a la izquierda */}
            <div className="flex-shrink-0">
                <Logo />
            </div>

            {/* Título centrado absolutamente */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <SystemTitle />
                <ProjectSelector />
            </div>

            {/* Espacio reservado a la derecha para mantener simetría */}
            <div className="flex-shrink-0 w-10"></div>
        </header>
    );
}

export default Header;