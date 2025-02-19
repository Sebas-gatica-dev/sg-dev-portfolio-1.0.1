import React, { useState } from 'react'



interface AccordionItem {
  id: string;
  open: boolean;
  title: string;
  icon: JSX.Element;
  content: Array<string | [string, Array<string>]>;
}

 const ListPythonStack: React.FC = () => {


  const [accordionData, setAccordionData] = useState<AccordionItem[]>([
    {
      id: 'python-libraries',
      title: 'Python and Libraries',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ), 
      content: [
        'Experience in developing scripts and applications in Python.',
       [
        'Intermediate knowledge of libraries such as:',
        [
          'Selenium: Web browser automation.',
          'BeautifulSoup(bs4): Web scraping and HTML/XML parsing.',
          'Requests: HTTP request handling.',
          'Flask: RESTful API and web application creation.',  
          ]
       ],
        'Experience integrating Python with databases using SQLAlchemy.'
      ],  

    },
    {
      id: 'python',
      title: 'Python',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ), 
      content: [
        [
          'Implementation of Machine Learning pipelines using tools like:',
          [
            'Airflow: Workflow orchestration.',
            'MLflow: ML model lifecycle management.',
            'DBT: Data transformation.'
          ],

        ],
        'Optimization of ML models for improved latency, memory, and performance.',
        'Deployment of ML models in production following MLOps best practices.',
        'Continuous monitoring and testing of models in production.',
      ],  

    },
    {
      id: 'modern-data-tools',
      title: 'Modern Data Tools',
      open: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ), 
      content:[ 
        [
          'Familiarity with modern data tools such as',
          [
          'Kafka: Real-time data streaming.',
          'DuckDB: Lightweight analytical database engine.',
          'Apache Pinot: Real-time analytics platform.',
          ],
        ],
        [
          'Experience with cloud AI services:',
          [
          'AWS Sagemaker: Building and deploying ML models.',
          'GCP Vertex AI: Training and managing ML models.',
          ],
        ],

      ],  

    },
  ]);

  

  const toggleAccordion = (id: string) => {
    setAccordionData((prevData) => 
      prevData.map((item) => 
        item.id === id ? {...item, open: !item.open} : item
      )
    );
  };


  const renderContentItem = (item: string | [string, Array<string>], index: number) => {
    if (typeof item === 'string') {
      return <li key={index}>{item}</li>;
    }
    
    if (Array.isArray(item)) {
      const [mainText, subItems] = item;
      return (
        <li key={index}>
          {mainText}
          <ul className="list-disc pl-5 mt-2">
            {subItems.map((subItem, subIndex) => (
              <li key={`${index}-${subIndex}`}>{subItem}</li>
            ))}
          </ul>
        </li>
      );
    }
  };



  return (
    <div className="mt-20 mb-20 mx-20">
      <h1 className="mb-4 text-3xl text-white underline underline-offset-3 decoration-double decoration-2 decoration-gray-800">
        Python and Machine Learning Skills
      </h1>

      <p className="mb-6 text-white">
         Developing advanced solutions using Python, MLOps, and modern Machine Learning tools.
      </p>

      <div className="relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md">
  
    {accordionData.map((item) => (
            <div key={item.id} className="duration-200 ease-out relative w-full mx-auto overflow-hidden text-sm text-white font-normal bg-gray-700 border border-gray-600 divide-y divide-gray-600 rounded-md" >
            <button onClick={() => toggleAccordion(item.id)} className="flex items-center justify-between w-full px-5 py-4 font-semibold text-left select-none">
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
            <div>
             { item.open && (<div className="p-5 pt-0 opacity-70">
                <ul className="list-disc pl-5 mt-4">
                {item.content.map((contentItem, index) => 
                    renderContentItem(contentItem, index)
                  )}
                  <li>Experience in developing scripts and applications in Python.</li>
                  <li> Intermediate knowledge of libraries such as:
                    <ul className="list-disc pl-5">
                     
                    </ul>
                  </li>
                  <li>Experience integrating Python with databases using SQLAlchemy.</li>
                </ul>
              </div>)

                }
            </div>
          </div>
        ))}

      </div>



    </div>
  )
}



export default ListPythonStack;