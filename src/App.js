import React, { Fragment } from 'react'
import AuthPage from './components/AuthPage/AuthPage'
import HomePage from './components/AuthPage/HomePage/HomePage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ComposeEmail from './components/ComposeEmail/ComposeEmail'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/compose' element={<ComposeEmail />} />

          <Route path="*" element={<Navigate to='/' replace />} />


        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App