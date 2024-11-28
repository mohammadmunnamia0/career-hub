import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statics from './Components/Statics/Statics';
import Applied from './Components/Applied/Applied';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import JobDetails from './Components/FeaturedJobs/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/statics",
        element:<Statics></Statics>
      },
      {
        path:"/applied",
        element: <Applied></Applied>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:'/job/:id', //dynamic
        element: <JobDetails></JobDetails>,
        loader : ()=> fetch('../jobs.json')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
