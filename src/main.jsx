import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import AdminPlanal from './Components/AdminPlanal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/admin',
        element: <PrivateRoutes>
          <AdminPlanal></AdminPlanal>
        </PrivateRoutes>
      },
      {
        path: '/orders',
        element:
         <PrivateRoutes>
          <Orders></Orders>
        </PrivateRoutes>
      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
