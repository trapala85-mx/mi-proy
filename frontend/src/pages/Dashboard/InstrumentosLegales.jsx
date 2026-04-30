/**
 * InstrumentosLegales.jsx
 *
 * Página de Instrumentos Legales del dashboard de SICFO.
 * Muestra el título del módulo y un mensaje descriptivo sobre la gestión de contratos y convenios.
 *
 * @component
 * @example
 * return (
 *   <InstrumentosLegales />
 * )
 */

function InstrumentosLegales() {
    return (
        <section className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
                Instrumentos Legales
            </h1>
            <p className="text-lg text-text-secondary text-center max-w-2xl">
                Aquí se gestiona el Contrato y los Convenios del Proyecto.
            </p>
        </section>
    );
}

export default InstrumentosLegales;