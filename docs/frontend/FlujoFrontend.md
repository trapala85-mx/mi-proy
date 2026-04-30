# Explicación del flujo en Frontend

**✅ Lo que entendiste bien:**

1. **Usuario entra a localhost:5173** → Sí, ve el dashboard completo (Sidebar + Header + contenido).

2. **El color verde lima** → Correcto, viene de `NavItem.jsx` en esta línea:
   ```jsx
   isActive ? 'bg-lime-400 text-gray-900' : 'text-gray-300 hover:bg-gray-700'
   ```

3. **El flujo del clic** → Correcto:
   - Usuario hace clic en un `NavItem`
   - `NavItem` ejecuta `onClick` → llega a `NavMenu` → llega a `Sidebar` como `handleSelect`
   - `Sidebar` actualiza su estado local `activeId` y **notifica al padre** con `onModuleChange(id)`

---

**⚠️ El detalle que te falta (y es clave):**

> *"Entiendo que se selecciona el Home por default porque en Sidebar, el useState default es 'home'"*

**Esto es parcialmente cierto, pero incompleto.** Hay **DOS estados** en juego, no uno:

| Estado         | Ubicación                | Valor inicial | Propósito                                         |
| -------------- | ------------------------ | ------------- | ------------------------------------------------- |
| `activeId`     | `Sidebar.jsx`            | `'home'`      | Controla **el color verde** del menú (UI visual)  |
| `activeModule` | `useModuleNavigation.js` | `'home'`      | Controla **qué página se muestra** en el `<main>` |

**El que realmente decide qué página se renderiza** es `activeModule` del hook, no el `activeId` del Sidebar.

---

**🔧 ¿Por qué funciona aunque sean dos estados separados?**

Porque en tu `App.jsx` actual tienes esto:

```jsx
const { activeModule, handleModuleChange } = useModuleNavigation();
// ...
<Sidebar onModuleChange={handleModuleChange} />
```

Y en tu `Sidebar.jsx`:
```jsx
const [activeId, setActiveId] = useState('home');
// ...
const handleSelect = (id) => {
    setActiveId(id);        // ← Actualiza el color verde del sidebar
    if (onModuleChange) {
        onModuleChange(id); // ← ¡Notifica a App para cambiar la página!
    }
};
```

---

**🎯 Resumen corregido:**

1. **Usuario entra** → `App.jsx` monta el hook con `activeModule = 'home'` → renderiza `<Home />`
2. **Sidebar también inicia** con `activeId = 'home'` → pinta de verde el primer item
3. **Usuario hace clic** en "Proyectos":
   - `Sidebar` cambia su `activeId` a `'proyectos'` → cambia el verde al segundo item
   - `Sidebar` llama `onModuleChange('proyectos')` → `App.jsx` actualiza `activeModule` → renderiza `<Proyectos />`

**Son dos estados independientes pero sincronizados** porque ambos inician en `'home'` y ambos se actualizan con el mismo valor cuando el usuario hace clic.

---

**❓ ¿Por qué no usar un solo estado?**

Se *podría* hacer, pero tu arquitectura es mejor así porque:
- `Sidebar` es un **componente específico de negocio** que maneja su propia UI
- `useModuleNavigation` es un **hook reutilizable** que podría usarse en otros contextos (ej: atajos de teclado, breadcrumbs, etc.)
- **Separación de responsabilidades**: el sidebar no necesita saber qué página se renderiza, solo necesita saber qué botón pintar de verde

---