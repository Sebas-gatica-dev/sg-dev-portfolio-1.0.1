import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Home from './Components/Layout/Home.tsx'
import ListProjects from './Components/Projects/ListProjects.tsx';
import ListKnowledge from './Components/Knowledge/ListKnowledge.tsx';
import Contact from './Components/Contact/Contact.tsx';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="features" element={<ListKnowledge />}></Route>
            <Route path="projects" element={<ListProjects />}></Route>
            <Route path="contact" element={<Contact />}></Route>       
        </Route>
      </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
