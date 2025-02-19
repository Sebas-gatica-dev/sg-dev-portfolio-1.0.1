import React, { useState } from 'react';
import { ToggleAccordion } from '../../helpers/ToggleAccordion';

interface AccordionItem {
  id: string;
  title: string;
  open: boolean;
  icon: JSX.Element;
  content: JSX.Element;
}

const ListJavaStack: React.FC = () => {
  // Estado para controlar qué acordeón está abierto
  const [accordionData, setAccordionData] = useState<AccordionItem[]>([
    {
      id: 'springboot',
      title: 'SpringBoot',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128">
          <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f" />
        </svg>
      ),
      content: (
        <ul className="list-disc pl-5">
          <li>SpringBoot is a powerful framework for building stand-alone, production-grade Spring-based applications.</li>
          <li>Over the course of two years, I collaborated sporadically on projects using SpringBoot.</li>
          <li>
            Developed RESTful APIs and implemented features such as:
            <ul className="list-disc pl-5">
              <li>Dependency injection</li>
              <li>Auto-configuration</li>
              <li>Seamless integration with databases</li>
            </ul>
          </li>
          <li>Designed scalable microservices to ensure efficient communication between components.</li>
          <li>Gained experience in creating production-ready applications with minimal configuration.</li>
        </ul>
      ),
    },
    {
      id: 'hibernate',
      title: 'Hibernate',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128">
          <path fill="#59666c" d="m29.246 3.766 23.168 40.129-23.18 40.19-23.156-40.19Zm69.508 120.468L75.586 84.105l23.18-40.19 23.156 40.19Zm0 0" />
          <path fill="#bcae79" d="M75.594 3.766H29.258L52.43 43.898h46.35ZM52.406 124.23H98.75L75.594 84.102H29.219Zm0 0" />
        </svg>
      ),
      content: (
        <ul className="list-disc pl-5">
          <li>Hibernate is an ORM (Object-Relational Mapping) framework that simplifies database interactions in Java applications.</li>
          <li>Worked sporadically with Hibernate over a two-year period to map Java objects to database tables and vice versa.</li>
          <li>
            Key tasks included:
            <ul className="list-disc pl-5">
              <li>Optimizing queries for better performance.</li>
              <li>Managing transactions to ensure data integrity.</li>
              <li>Handling complex relationships between entities (e.g., one-to-many, many-to-many).</li>
            </ul>
          </li>
          <li>Gained experience designing efficient data models to improve application performance.</li>
          <li>Enhanced ability to work with relational databases and ORM frameworks in Java applications.</li>
        </ul>
      ),
    },
    {
      id: 'angular',
      title: 'Angular',
      open: false,
      icon: (
        <img className="w-6 h-6 object-cover" src="https://res.cloudinary.com/db4xypidq/image/upload/v1739906970/angular-icon-svgrepo-com_amoa46.svg" alt="angular icon" />
      ),
      content: (
        <ul className="list-disc pl-5">
          <li>Developed reusable components to streamline UI development and ensure consistency across the application.</li>
          <li>Implemented lazy loading for modules, reducing the initial load time by 40% and improving user experience.</li>
          <li>Built dynamic forms with Angular Reactive Forms, enabling real-time validation and seamless data handling.</li>
          <li>Optimized change detection strategies to enhance performance in data-heavy components.</li>
          <li>Integrated RESTful APIs using Angular’s HttpClient, ensuring efficient data fetching and error handling.</li>
          <li>Managed global state with NgRx, allowing for scalable state management in a large-scale enterprise application.</li>
          <li>Designed modular architecture by organizing features into Angular modules, improving code maintainability.</li>
          <li>Utilized Angular Material for responsive and accessible UI components, enhancing the overall design system.</li>
        </ul>
      ),
    }
  ]);


  const toggleAccordion = (id: string) => {
    setAccordionData((prevData) => 
      prevData.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item  
      )
    );
  }
  // Función para manejar el clic en un acordeón
  // const toggleAccordion = (id: string) => {
  //   setActiveAccordion(activeAccordion === id ? null : id);
  // };

  return (
    <div className="mt-20 mb-20 mx-20">
      <h1 className="mb-4 text-3xl text-white underline underline-offset-3 decoration-double decoration-2 decoration-gray-800">
        Java Skills
      </h1>
      <p className="mb-4 text-white">Development of REST APIs with Java SpringBoot,implementation of Hibernate for database management, and Angular for front-end development.</p>
      <span>Proficient in the SpringBoot framework.</span>

      <div className="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">
        {accordionData.map((item) => (
          <div key={item.id} className="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">
            <button
              onClick={() => toggleAccordion(item.id)}
              className="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none"
            >
              <div className="flex gap-x-2">
                <span>{item.title}</span>
                {item.icon}
              </div>
              <div
                className={`relative flex items-center justify-center w-2.5 h-2.5 duration-300 ease-out ${
                  item.open ? 'rotate-90' : ''
                }`}
              >
                <div className="absolute w-0.5 h-full bg-gray-300 group-hover:bg-gray-400 rounded-full"></div>
                <div
                  className={`absolute w-full h-0.5 ease duration-500 bg-gray-300 group-hover:bg-gray-400 rounded-full ${
                    item.open ? 'rotate-90' : ''
                  }`}
                ></div>
              </div>
            </button>
            {item.open && (
              <div className={`p-5 pt-0 opacity-0 mt-4 ${
                item.open ? 'opacity-100' : ''
              } ease duration-500`}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListJavaStack;