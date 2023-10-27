import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Home'
import SignIn from './components/SignIn'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import URLShortener from './components/URLShortener'
import Loading from './components/Loading'
import Main from './components/Main'
// import Room from './components/Room'
// import Dashboard from './components/Dashboard'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        {/* <Route path='/shorten/:id' element={<Main />} /> */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:id' element={<ResetPassword />} />
        <Route path='/url-shorten' element={<URLShortener />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/main' element={<Main />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
