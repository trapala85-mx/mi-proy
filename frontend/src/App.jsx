import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useModuleNavigation } from './hooks/useModuleNavigation.js';

function App() {
  const { activeModule, handleModuleChange } = useModuleNavigation();

  return (

    <div className="min-h-screen bg-bg-global text-white flex">
      <Sidebar onModuleChange={handleModuleChange} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6">
          <h1 className="text-2xl font-bold">Resumen General</h1>
          <p className="mt-4 text-gray-400">Aquí se mostrarán las gráficas y el resumen del proyecto seleccionado.</p>
        </main>

      </div>

    </div>
  );
}

export default App;