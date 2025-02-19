import React from 'react'

export default function Contact() {
  return (
    <div className="mt-20 p-8 bg-gradient-to-b from-black to-gray-800 min-h-1/2 flex flex-col items-center  text-white">
    <h1 className="mb-6 text-white text-4xl font-extrabold md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-indigo-700 ">Contact me!</h1>

    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">

      <div className=" m-2 border-4s border-gray-800 rounded-full rounded-full overflow-hidden w-64 h-48 shadow-lg">
        <img src="https://res.cloudinary.com/db4xypidq/image/upload/v1738770786/foto-avatar-yo_x8p3n9.jpg" alt="Tu foto" className="w-full h-full rounded-full object-cover" />
      </div>



      <div className="text-center md:text-left">
        <p className="text-lg mb-4 mt-8">
            I am Sebastián Gatica, an experienced developer willing to offer innovative solutions to complex problems.
            I feel very comfortable working in a team, I am familiar with agile methodologies and collaboration platforms and teamwork management.
            </p>
        <p className="text-lg mb-4">
                You can leave me a message on linkedin, and you are also invited to look at my personal projects on github</p>
            <div className=" flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2"> 
              <a href="https://www.linkedin.com/in/sebastian-gatica-dev/" target="_blank" rel="noopener noreferrer" className="flex gap-x-2  text-white font-semibold py-2 px-4 rounded-md transition duration-300">

              <img src="https://res.cloudinary.com/db4xypidq/image/upload/v1738770785/linkedin-svgrepo-com_mhgnzc.svg" alt="LinkedIn"  className="w-10 h-10 object-cover" />
                
              <h2 className="text-white mt-2 ">Linkedin</h2>
            </a>

            <a href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noopener noreferrer" className="flex gap-x-2  text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            
              <img src="https://res.cloudinary.com/db4xypidq/image/upload/v1738770785/github-svgrepo-com_ss1dch.svg" alt="GitHub"  className="w-10 h-10 object-cover" />
                
              <h2 className="text-white mt-2 ">Github</h2>
            </a>
        
        </div>
      
      </div>
    </div>
  </div>
  )
}
