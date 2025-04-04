import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Home} from './pages/index.js'
import AppRoutes from './Routes/AppRoutes.jsx'
import AuthProvider from './context/AuthContext.jsx'

function App() {

  return (
    <>
    <AppRoutes/>
    </>
  )
}

export default App
