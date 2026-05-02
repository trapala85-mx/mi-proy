/**
 * FormField - Renderiza un campo de formulario según su tipo.
 *
 * @param {Object} props
 * @param {FieldSchema} props.field - Configuración del campo.
 * @param {string} props.value - Valor actual.
 * @param {Function} props.onChange - Callback al cambiar.
 *
 * @returns {JSX.Element}
 */
function FormField({ field, value, onChange }) {
    const baseClasses = "w-full px-4 py-2.5 bg-bg-global border border-border-default rounded-md text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent";

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-text-secondary mb-2">
                {field.label}
                {field.required && <span className="text-danger ml-1">*</span>}
            </label>

            {field.type === 'textarea' ? (
                <textarea
                    value={value || ''}
                    onChange={(e) => onChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={3}
                    className={baseClasses}
                />
            ) : (
                <input
                    type={field.type}
                    value={value || ''}
                    onChange={(e) => onChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className={baseClasses}
                />
            )}
        </div>
    );
}

export default FormField;