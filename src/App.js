import React, { Fragment, useEffect } from 'react'
import AuthPage from './components/AuthPage/AuthPage'
import HomePage from './components/AuthPage/HomePage/HomePage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ComposeEmail from './components/ComposeEmail/ComposeEmail'
import MailHome from './components/MailHome/MailHome'
import SentMail from './components/MailHome/SentMail/SentMail'
import { mailDataAction } from './components/store/maildataSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import SingleMailInbox from './components/MailHome/SingleMailInbox/SingleMailInbox'

const App = () => {
  const endpoint = localStorage.getItem('senderEmail');
  const Data = useSelector(state => state.mailData.inboxData)


  const dispatch = useDispatch();






  return (
    <Fragment>
      {localStorage.getItem('senderEmail') && <HomePage />}
      <BrowserRouter>
        <Routes>

          <Route path='/auth' element={<AuthPage />} />
          <Route path='/compose' element={<ComposeEmail />} />
          <Route path='/mail' element={<MailHome />} />
          <Route path='/sentmail' element={<SentMail />} />
          <Route path='/mail/single' element={<SingleMailInbox />} />

          <Route path="*" element={<Navigate to='/mail' replace />} />


        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App