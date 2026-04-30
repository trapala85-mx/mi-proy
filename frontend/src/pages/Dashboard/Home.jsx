/**
 * Home.jsx
 *
 * Página de Resumen General del dashboard de SICFO.
 * Muestra el título del módulo y un mensaje descriptivo sobre el contenido futuro.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */

function Home() {
    return (
        <section className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
                Resumen General
            </h1>
            <p className="text-lg text-text-secondary text-center max-w-2xl">
                Aquí se mostrarán las gráficas y el resumen del proyecto seleccionado.
            </p>
        </section>
    );
}

export default Home;