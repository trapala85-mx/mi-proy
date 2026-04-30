import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Dashboard/Home.jsx';
import Proyectos from './pages/Dashboard/Proyectos.jsx';
import InstrumentosLegales from './pages/Dashboard/InstrumentosLegales.jsx';
import Configuracion from './pages/Dashboard/Configuracion.jsx';
import { useModuleNavigation } from './hooks/useModuleNavigation.js';

/**
 * Orquestador de contenido del dashboard.
 *
 * Recibe el ID del módulo activo y devuelve el componente de página correspondiente.
 *
 * @param {string} activeModule - ID del módulo activo.
 * @returns {JSX.Element} Componente de página a renderizar.
 */

function renderModuleContent(activeModule) {
  switch (activeModule) {
    case 'home':
      return <Home />;
    case 'proyectos':
      return <Proyectos />;
    case 'instrumentosLegales':
      return <InstrumentosLegales />;
    case 'configuracion':
      return <Configuracion />;
    default:
      return <Home />;
  }
}

function App() {
  const { activeModule, handleModuleChange } = useModuleNavigation();

  return (

    <div className="min-h-screen bg-bg-global text-white flex">
      <Sidebar onModuleChange={handleModuleChange} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6">
          {renderModuleContent(activeModule)}
        </main>

      </div>

    </div>
  );
}

export default App;