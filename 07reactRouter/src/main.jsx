import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./assets/components/Home/Home";
import About from "./assets/components/About/About";
import Contact from "./assets/components/Contact US/Contact"
import Layot from "./Layot";
import User from "./assets/components/User/User";
import GitHub from "./assets/components/GitHub/GitHub";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layot />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact-us',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layot />}>
       <Route path="/" element={<Home />}/>
       <Route path="about" element={<About />}/>
       <Route path="contact-us" element={<Contact />}/>
       <Route path="user/:userid" element={<User />}/>
       <Route path="github" element={<GitHub />}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)