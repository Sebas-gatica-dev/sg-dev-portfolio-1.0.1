import React, { useState } from 'react';
import { projects as allProjects } from '../../resources/projects';
import { technologies } from '../../resources/technologies';

const ListProjects: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<any | null>(null); // Estado para el modal
  const projectsPerPage = 3;

  // Filtrar proyectos
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTechnologies =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.every((tech) => project.technologies.includes(tech));
    return matchesSearch && matchesTechnologies;
  });

  // Paginación
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Manejar selección/deselección de tecnologías
  const toggleTechnology = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(selectedTechnologies.filter((t) => t !== tech));
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech]);
    }
  };

  // Limpiar filtros
  const clearFilters = () => {
    setSelectedTechnologies([]);
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Cerrar modal
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Mis Proyectos</h2>

        {/* Barra de Filtros */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <input
              type="text"
              placeholder="Buscar proyecto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
            <button
              onClick={clearFilters}
              className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="size-6 h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                </svg>
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTechnology(tech)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTechnologies.includes(tech)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                } transition-colors`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)} // Abrir modal al hacer clic
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 rounded-md ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                } transition-colors`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg w-full max-w-4xl p-6 relative">
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.name}</h3>
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="315"
                  src={selectedProject.videoUrl}
                  title="Video del Proyecto"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm mb-4">{selectedProject.details}</p>
              {selectedProject.productionUrl && (
                <a
                  href={selectedProject.productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Ver en Producción
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProjects;