import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from "react-router-dom"
import "@progress/kendo-font-icons/dist/index.css";
import '@progress/kendo-theme-material/dist/all.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
