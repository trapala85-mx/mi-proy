/**
 * Proyectos.jsx
 *
 * Página de Gestión de Proyectos del dashboard de SICFO.
 * Muestra el título del módulo y un mensaje descriptivo sobre la gestión de altas, bajas y modificaciones.
 *
 * @component
 * @example
 * return (
 *   <Proyectos />
 * )
 */

function Proyectos() {
    return (
        <section className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
                Proyectos
            </h1>
            <p className="text-lg text-text-secondary text-center max-w-2xl">
                Aquí se gestionarán las altas, bajas y modificaciones de los Proyectos.
            </p>
        </section>
    );
}

export default Proyectos;