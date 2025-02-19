import React, { useState, useEffect } from 'react';

export default function Hero2() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [charIndex1, setCharIndex1] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);

  const textArray1 = [
    'There are doors that if you cross them... there is no turning back.',
  ];

  const textArray2 = [
    'Technology makes every business or project grow exponentially.',
  ];

  useEffect(() => {
    // Efecto de typing para el primer texto
    const typingInterval1 = setTimeout(() => {
      if (charIndex1 < textArray1[0].length) {
        setText1(textArray1[0].substring(0, charIndex1 + 1));
        setCharIndex1(charIndex1 + 1);
      }
    }, 52); // Velocidad de escritura

    // Efecto de typing para el segundo texto
    const typingInterval2 = setTimeout(() => {
      if (charIndex2 < textArray2[0].length) {
        setText2(textArray2[0].substring(0, charIndex2 + 1));
        setCharIndex2(charIndex2 + 1);
      }
    }, 52); // Velocidad de escritura

    return () => {
      clearTimeout(typingInterval1);
      clearTimeout(typingInterval2);
    };
  }, [charIndex1, charIndex2]);

  return (
    <div
      className="bg-black relative w-full h-[30rem] rounded-md overflow-hidden pt-10 pb-48 lg:px-24 max-w-7xl mx-auto px-5"
      style={{
        backgroundImage:
          "url('https://cdn.devdojo.com/images/february2022/hero-bg-02.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Texto visible en móviles */}
      <div className="block md:hidden relative z-30 text-center mt-10">
        <p className="text-xs sm:text-sm text-white font-light leading-tight">
          There are doors that if you cross them... <br /> There is no turning
          back. <br />
          Programming that makes a difference, making a better reality.
        </p>
      </div>

      {/* Texto arriba a la izquierda (visible en md y lg) */}
      <div className="hidden md:block absolute z-30 top-10 left-10 lg:top-16 lg:left-16">
        <p className="w-80 text-sm md:text-xl lg:text-2xl text-white font-light leading-tight">
          {text1}
          <span className="animate-blink">|</span>
        </p>
      </div>

      {/* Texto abajo a la derecha (visible en md y lg) */}
      <div className="hidden md:block absolute z-30 bottom-10 right-10 lg:bottom-16 lg:right-16">
        <p className="w-80 text-sm md:text-xl lg:text-2xl text-white font-light leading-tight">
          {text2}
          <span className="animate-blink">|</span>
        </p>
      </div>
    </div>
  );
}