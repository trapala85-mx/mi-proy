/**
 * SidebarHeader - Título del menú lateral.
 *
 * Renderiza el texto "Menú" con el estilo visual característico
 * del sidebar (color verde lima, mayúsculas, espaciado).
 *
 * @returns {JSX.Element} Encabezado del sidebar.
 *
 * @example
 * <SidebarHeader />
 */
function SidebarHeader() {
    return (
        <div className="px-4 py-6">
            <h2 className="text-accent text-sm font-bold uppercase tracking-widest">
                Menú
            </h2>
        </div>
    );
}

export default SidebarHeader;