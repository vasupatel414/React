import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Homex from './Page/Homex';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Aboutx from './Page/Aboutx';
import Coursex from './Page/Coursex';
import Blog from './Page/Blog';
import Blogdetailsx from './Page/Blogdetailsx';
import Error404 from './Page/Error404';
const root = ReactDOM.createRoot(document.getElementById('root'));

let allroutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Homex></Homex>,
    },
    {
      path: 'about-us',
      element: <Aboutx></Aboutx>,
    },
    {
      path: 'Course',
      element:<Coursex></Coursex>,
    },
    {
      path: 'blog',
      element:<Blog></Blog> ,
    },
    {
      path: 'blog/:id',
      element: <Blogdetailsx></Blogdetailsx>,
    },
    {
      path: '*',
      element: <Error404></Error404>,
    },

  ]
)

root.render(
  <React.StrictMode>
<RouterProvider router={allroutes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
