import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import FormRegistro from './Pages/Form/FormRegistro.jsx'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    Path : '/',
    element : <App></App>
  },
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/FormRegistro',
    element: <FormRegistro></FormRegistro>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
