import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="pt-10 bg-black">
    <div className="px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
            <a href="#_" className=" p-6 flex items-center justify-center w-10 h-10 mr-3 rounded-lg mb-7 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 rounded-xxl">
                <span className="text-white text-xs m-2 font-bold">Sg.dev</span>
            </a>

            <div className="flex flex-row justify-center mb-4 -ml-4 -mr-4"> 
            
            <a href="https://github.com/Sebas-gatica-dev" target="_blank" className="p-4 text-gray-700 hover:text-gray-400 h-4 w-4"> 
                <i className="fa-brands fa-github"></i>
            </a>
                    
            <a href="https://www.linkedin.com/in/sebastian-gatica-dev/" target="_blank" className="p-4 text-gray-700 hover:text-gray-400"> 
                <i className="fa-brands fa-linkedin"></i>
            </a>

        
            
            
            </div>
        </div>
        <div className="flex flex-col justify-between text-center md:flex-row">
            <p className="order-last text-sm leading-tight text-gray-500 md:order-first"> Built by Sebastián Gatica Developer. </p>
            <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
            <li> <Link to="#/" className="px-4 text-gray-500 hover:text-white">Home</Link> </li>
                <li> <Link to="/features" className="px-4 text-gray-500 hover:text-white">Features</Link> </li>
                <li> <Link to="/projects" className="px-4 text-gray-500 hover:text-white">Projects</Link> </li> 
                <li> <Link to="/contact" className="px-4 text-gray-500 hover:text-white">Contact</Link> </li>
            </ul>
        </div>
    </div>
</section>
  )
}
