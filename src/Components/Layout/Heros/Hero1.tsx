import React, { useState, useEffect } from 'react';

export default function Hero1() {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState('forward');

  const textArray = [
    'Welcome to my Portfolio.',
    'You can know more about my skills.',
    'My experience and my projects.',
  ];

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
      }, 52); // Velocidad de escritura
    } else {
      typingInterval = setTimeout(() => {
        if (charIndex > 0) {
          setText(textArray[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDirection('forward');
          setTextIndex((textIndex + 1) % textArray.length);
        }
      }, 52); // Velocidad de borrado
    }

    return () => clearTimeout(typingInterval);
  }, [textIndex, charIndex, direction]);

  return (
    <div className="items-center h-[30rem] relative w-full z-20 pt-40 pb-48 lg:px-24 max-w-7xl md:px-12 mx-auto px-5">
      <div className="items-center w-full relative col-span-8 gap-12 z-30 -translate-y-5 lg:inline-flex m-auto">
        <div className="max-w-full lg:text-left sm:text-center">
          <h1 className="font-semibold pb-2 md:text-5xl xl:text-8xl xl:leading-none xl:tracking-tightest tracking-tight text-3xl inline-block bg-clip-text bg-gradient-to-r text-transparent from-gray-300 via-white to-gray-500">
            Sebastián Gatica Developer
          </h1>
          <p className="text-white font-light lg:text-xl tracking-tight lg:leading-7 opacity-90 max-w-xl sm:mx-auto lg:mx-0 mt-4 text-lg">
            <div className="relative flex items-center justify-center mx-auto text-center max-w-7xl">
              <div className="absolute left-0 top-4">
                <div className="relative flex items-center justify-center h-auto">
                  <p className="text-xs md:text-lg lg:text-2xl text-white leading-tight">{text}</p>
                  <span className="absolute right-0 w-2 -mr-2 bg-white h-3/4 animate-blink"></span>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      <img
        src="https://cdn.devdojo.com/images/february2023/header-svg.svg"
        className="h-96 absolute right-0 z-30 bottom-0 opacity-0 w-auto"
      />
      <div className="bg-gradient-to-r from-transparent via-transparent w-1/2 h-full opacity-20 right-0 to-black absolute bottom-0 z-20"></div>
      <img
        alt="hero"
        className="w-full absolute bottom-0 right-0 z-0 mx-auto translate-y-20 md:translate-y-56 scale-110 lg:-translate-x-10 drop-shadow-xl opacity-100 lg:ml-auto"
        src="https://cdn.devdojo.com/images/february2023/liquid-img.png"
      />
    </div>
  );
}