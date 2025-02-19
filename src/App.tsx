
import './App.css'
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import './styles.css'

import { Outlet } from 'react-router';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow bg-black">
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

export default App
