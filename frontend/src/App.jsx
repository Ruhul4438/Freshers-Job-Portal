import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/profile",
    element: <Profile/>
  },
    // admin ke liye yha se start hoga
    {
      path:"/admin/companies",
      element: <ProtectedRoute><Companies/></ProtectedRoute>
    },
    {
      path:"/admin/companies/create",
      element: <ProtectedRoute><CompanyCreate/></ProtectedRoute>
    },
    {
      path:"/admin/companies/:id",
      element: <ProtectedRoute><CompanySetup/></ProtectedRoute>
    },
    {
      path:"/admin/jobs",
      element:<ProtectedRoute><AdminJobs/> </ProtectedRoute>
    },
    {
      path:"/admin/jobs/create",
      element:<ProtectedRoute><PostJob/></ProtectedRoute>
    },
    {
      path:"/admin/jobs/:id/applicants",
      element:<ProtectedRoute><Applicants/></ProtectedRoute>
    },

])

function App() {
  

  return (
    <>
      <div>
        <RouterProvider router = {appRouter}/>
      </div>
    </>
  )
}

export default App