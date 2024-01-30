// 'use client'
// App.jsx
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UseAuth from './components/useAuth'
import GetRouter from './components/getRouter'

const App = () => {
  return (
    <Router>
      <UseAuth>
        <GetRouter />
      </UseAuth>
    </Router>
  )
}

export default App
