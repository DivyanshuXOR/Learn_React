import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./assets/components/Home/Home";
import About from "./assets/components/About/About";
import Layot from "./Layot";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layot />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)