import React from 'react'
import Hero1 from './Heros/Hero1';
import Hero2 from './Heros/Hero2';
import Hero3 from './Heros/Hero3';

export default function Home() {
  return (
    <section className="overflow-hidden relative h-auto bg-black">
      <div className="lg:p-8 xl:max-w-7xl mx-auto">
        <div data-aos="fade-left" data-aos-duration="1000" 
            className="hero-1 rounded-2xl mx-6 lg:rounded-[3rem] overflow-hidden relative">
                 <Hero1 />
        </div>  
        <div className="contenedor derecha mt-10 rounded-2xl lg:rounded-[3rem] overflow-hidden relative" >
          <Hero2 />
        </div>
        <div className="contenedor izquierda mt-10 rounded-2xl lg:rounded-[3rem] overflow-hidden relative">
          <Hero3 />
        </div>

      </div>
     
    </section>
  )
}
