// Función reutilizable para alternar el estado de un acordeón
export const ToggleAccordion = (
    id: string,
    activeId: string,
    setActiveId: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setActiveId(activeId === id ? '' : id);
  };