
import './App.css'
import AppRoutes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/SliderBar'
import Header from './components/Header'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
          <Header/>
          <div className="flex flex-1 mt-24 ">
            {/* Sidebar for desktop */}
            <div className="hidden lg:block w-64">
              <Sidebar />
            </div>

            {/* Sidebar for mobile */}
            <div
              className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } transition-transform duration-300 lg:hidden`}
            >
              <div className="flex justify-end p-4">
                <FaTimes
                  className="text-2xl text-gray-700 cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)}
                />
              </div>
              <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>

              <main className="flex-1 p-2 w-full">
                <div className="lg:hidden mb-4">
                  <FaBars
                    className="text-2xl text-gray-700 cursor-pointer"
                    onClick={() => setIsSidebarOpen(true)}
                  />
                </div>

                <AppRoutes />
              </main>
          </div>
      </div>
    </Router>
  )
}

export default App
