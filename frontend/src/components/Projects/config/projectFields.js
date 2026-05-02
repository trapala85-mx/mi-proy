/**
 * Esquema de campos del proyecto.
 *
 * @typedef {Object} FieldSchema
 * @property {string} key - Identificador interno.
 * @property {string} label - Texto visible.
 * @property {string} type - 'text' | 'date' | 'textarea' | 'number'.
 * @property {boolean} required - Si es obligatorio.
 * @property {string} [placeholder] - Texto de ayuda.
 */

export const projectFields = [
    { key: 'name', label: 'Nombre del Proyecto', type: 'text', required: true, placeholder: 'Ej. Supervisión Tren Maya Tramo 2' },
    { key: 'contractDate', label: 'Fecha de Firma', type: 'date', required: false },
    { key: 'budget', label: 'Presupuesto', type: 'number', required: false, placeholder: 'Ej. 15000000' },
    { key: 'location', label: 'Ubicación', type: 'text', required: false, placeholder: 'Ej. Quintana Roo, México' },
    { key: 'observations', label: 'Observaciones', type: 'textarea', required: false, placeholder: 'Notas adicionales...' },
];