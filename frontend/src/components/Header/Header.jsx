import Logo from './Logo.jsx';
import SystemTitle from './SystemTitle.jsx';
import ProjectSelector from './ProjectSelector.jsx';

function Header() {
    return (
        <header className="h-16 bg-gray-800 border-b-4 border-gray-700 flex items-center justify-between px-6 relative">
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