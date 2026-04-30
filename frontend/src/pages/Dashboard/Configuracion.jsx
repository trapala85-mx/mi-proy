/**
 * Configuracion.jsx
 *
 * Página de Configuración del dashboard de SICFO.
 * Muestra el título del módulo y un mensaje descriptivo sobre los ajustes del sistema.
 *
 * @component
 * @example
 * return (
 *   <Configuracion />
 * )
 */

function Configuracion() {
    return (
        <section className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
                Configuración
            </h1>
            <p className="text-lg text-text-secondary text-center max-w-2xl">
                Configuración del sistema.
            </p>
        </section>
    );
}

export default Configuracion;