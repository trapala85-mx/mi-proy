// hooks/useModal.js
import { useState } from 'react';

/**
 * Hook genérico para controlar un modal.
 *
 * @returns {Object}
 * @returns {boolean} isOpen - Si está abierto.
 * @returns {Function} open - Abre el modal.
 * @returns {Function} close - Cierra el modal.
 * @returns {Function} toggle - Alterna abierto/cerrado.
 */
export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((prev) => !prev),
    };
}