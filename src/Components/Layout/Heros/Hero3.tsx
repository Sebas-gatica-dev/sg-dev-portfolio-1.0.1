import React, { useState, useEffect } from 'react';
import computerImage from '../../../assets/computer-img-1.jpg'; // Importa la imagen desde la carpeta assets

export default function Hero3() {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState('forward');

  const textArray = ['development.', 'maintenance.', 'support.'];

  useEffect(() => {
    let typingInterval;

    if (direction === 'forward') {
      typingInterval = setTimeout(() => {
        if (charIndex < textArray[textIndex].length) {
          setText(textArray[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setDirection('backward');
        }
      }, 92); // Velocidad de escritura
    } else {
      typingInterval = setTimeout(() => {
        if (charIndex > 0) {
          setText(textArray[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDirection('forward');
          setTextIndex((textIndex + 1) % textArray.length);
        }
      }, 92); // Velocidad de borrado
    }

    return () => clearTimeout(typingInterval);
  }, [textIndex, charIndex, direction]);

  return (
    <div
      className="bg-black border border-collapse border-black relative items-center h-[30rem] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${computerImage})`, // Usa la imagen importada
      }}
    >
      <div className="relative z-10 flex items-center w-full h-full px-5 mx-auto lg:px-24">
        <div className="absolute top-10 left-0 md:relative text-start lg:text-left max-w-full">
          <p className="text-white font-light text-xs md:text-lg lg:text-xl tracking-tight leading-7 opacity-90">
            {/* Texto animado */}
            <div className="flex items-start md:items-center md:justify-center ml-10 text-center max-w-7xl">
              <div className="relative flex place-items-start md:items-center md:justify-center h-auto">
                <span className="text-xs md:text-lg lg:text-2xl sm:text-sm text-white leading-tight">
                  Thanks for coming, surely you will find,
                  <br />
                  <div className="flex relative">
                    <span className="text-xs md:text-lg lg:text-2xl sm:text-sm text-white leading-tight">
                      what you are looking for{' '}
                    </span>
                    <p className="inline-block text-xs md:text-lg lg:text-2xl sm:text-sm text-white leading-tight pl-2">
                      {text}
                    </p>
                    {/* Cursor */}
                    <span className="inline-block w-1 md:w-2 -mr-2 bg-white h-3 lg:h-6 animate-blink"></span>
                  </div>
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}