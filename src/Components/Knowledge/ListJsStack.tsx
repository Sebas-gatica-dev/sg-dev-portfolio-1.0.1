import React, {useState} from 'react'
// import { AccordionItemInterface as AccordionItem } from '../Interfaces/AccordionItemInterface';



interface AccordionItem{
  id: string;
  title: string;
  open: boolean;
  icon: JSX.Element;
  content: string[];
}



 const ListJsStack: React.FC = () => {


  



  const [accordionData, setAccordionData] = useState<AccordionItem[]>([
    {
      id: 'react',
      title: 'React',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 128 128" className="my-1">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"/>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/>
        </g>
      </svg>
      ),
      content:[
        "Built interactive user interfaces using React's component-based architecture.",
        'Integrated state management libraries like Redux for complex application states.',
        'Developed reusable components and hooks to streamline development processes.',
        'Implemented routing with React Router for multi-page applications.',
        'Worked with third-party APIs to fetch and display data dynamically.',
        'Optimized performance by lazy-loading components and minimizing re-renders.'
      ],
    },
    {
      id: 'express',
      title: 'Express',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="text-white my-1" viewBox="0 0 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>
      ),
      content:[
        'Built RESTful APIs using Express to handle CRUD operations and integrate with databases.',
        'Developed middleware for authentication, logging, and error handling to ensure secure and robust applications.',
        'Implemented routing and controllers to organize API endpoints effectively.',
        'Integrated third-party services like AWS S3 for file storage.',
        'Optimized API performance by implementing caching strategies and database query optimizations.',
        'Worked with tools like Postman for API testing.'
      ]
      ,
    },
  ]);



  const toggleAccordion = (id: string) => {
    setAccordionData((prevData) => 
      prevData.map((item) => 
       item.id === id ? {...item, open: !item.open} : item 
      )
    );
  };



  return (
  <div className="mt-20 mb-20 mx-20">
        <h1 className="mb-4 text-3xl text-white underline underline-offset-3 decoration-double decoration-2 decoration-gray-800">
        JavaScript skills
        </h1>
  
        <p className="mb-4 text-white">
          In addition to using js within the Laravel environment through AlpineJS, I also have experience developing using pure js applications, React, and on the other hand I have knowledge of the Express framework to develop rest api.
        </p>
        <span>My main aptitudes in js.</span>

  
        <div  className="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">
        {accordionData.map((item) => (
          <div key={item.id} className="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">
            <button
              onClick={() => toggleAccordion(item.id)}
              className="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none"
            >
              <div className="flex gap-x-2">
                <span className="mt-2">{item.title}</span>
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



export default ListJsStack;