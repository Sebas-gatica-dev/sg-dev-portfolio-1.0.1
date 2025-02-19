// src/components/AnimatedElement.tsx
import React, { useEffect, useRef } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          elementRef.current.classList.add('visible');
        }
      }
    };

    // Agregar el listener al scroll
    window.addEventListener('scroll', handleScroll);

    // Verificar si el elemento ya está visible al cargar la página
    handleScroll();

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className="contenedor">
      {children}
    </div>
  );
};

export default AnimatedElement;