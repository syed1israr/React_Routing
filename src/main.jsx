import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'



const router =createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [{
      path: '/',
      element: <Home/>
    },
    {
      path: '/About',
      element: <About/>
    },
    {
      path: 'Contact',
      element: <Contact/>
    },{
      path: '/user/:userid',
      element: <User/>
    },
    {
      path: 'github',
      element: <Github/>
    },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
