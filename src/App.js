import React, { Fragment } from 'react'
import AuthPage from './components/AuthPage/AuthPage'
import HomePage from './components/AuthPage/HomePage/HomePage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ComposeEmail from './components/ComposeEmail/ComposeEmail'
import MailHome from './components/MailHome/MailHome'
import SentMail from './components/MailHome/SentMail/SentMail'

const App = () => {
  return (
    <Fragment>
      {localStorage.getItem('senderEmail') && <HomePage />}
      <BrowserRouter>
        <Routes>

          <Route path='/auth' element={<AuthPage />} />
          <Route path='/compose' element={<ComposeEmail />} />
          <Route path='/mail' element={<MailHome />} />
          <Route path='/sentmail' element={<SentMail />} />

          <Route path="*" element={<Navigate to='/mail' replace />} />


        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App