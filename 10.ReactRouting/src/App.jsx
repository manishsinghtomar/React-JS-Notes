import { createBrowserRouter, RouterProvider } from "react-router";

import './App.css'
//step 1: import react router packages
//step 2 : create routes
//step 3 : Use RouterProvider


//extra we want navbar on every pages that's why we are adding navbar in elements

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import MockTest from "./components/MockTest";
import Courses from "./components/Courses";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div> 
                 <Navbar />
                 <Home />
               </div> 
    },
    
    {
      path:"/about",
      element:  <div> 
                  <Navbar />
                  <About />
                </div> 
    },

    {
      path:"/dashboard",
      element: <div> 
                 <Navbar />
                 <Dashboard />
               </div>,
               children:[
                {
                  path:'courses',
                  element: <Courses />
                },
                {
                  path:'mock-tests',
                  element: <MockTest />
                },
                {
                  path:'reports',
                  element: <Reports />
                }
               ]
    },
    
    {
      path:"/student/:id",
      element: <div> 
                 <Navbar />
                 <ParamComp />
               </div> 
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
);

function App() {
  

  return (

    <div>
       <RouterProvider router={router} />
    </div>

  )
}

export default App
