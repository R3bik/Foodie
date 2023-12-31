import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import{ Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Overview, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Menu } from './pages';
import Login from './components/Login/LoginPage';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu } = useStateContext();
  
  return (

<div>
  <BrowserRouter><Routes>
  <Route path="/" element={<Login />} />
  </Routes></BrowserRouter>

  <BrowserRouter>
  
  
      <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
                <FiSettings />
              </button>
            </TooltipComponent>

          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>

          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div  className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
                <div className='fixed md:static
                bg-main-bg dark:bg-main-dark-bg
                navbar w-full'>
                    <Navbar />
                </div>
          
          <div >
              <Routes>
                <Route>

                  {/* Login */}

                 

                  {/* Dashboard */}
                  <Route path="/overview" element={<Overview />} />
                  <Route path="/overview" element={<Overview />} />

                  {/* Pages */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/menu" element={<Menu />} />

                  {/* Apps */}
                </Route>
              </Routes>
          </div>
          </div>
      </div>
  </BrowserRouter>
</div>
)
}

export default App;
