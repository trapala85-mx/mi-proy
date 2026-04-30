/**
 * SystemTitle - Título principal del sistema en el header.
 *
 * Renderiza el nombre completo del sistema con estilo destacado.
 *
 * @returns {JSX.Element} Título del sistema.
 *
 * @example
 * <SystemTitle />
 */
function SystemTitle() {
    return (
        <h1 className="text-xl font-bold text-text-primary tracking-wide">
            Sistema Integral de Control Financiero de Obra
        </h1>
    );
}

export default SystemTitle;