import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/signIn' element = {<SignIn/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/signOut' element = {<SignOut/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
