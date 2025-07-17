import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Router } from 'react-router'
import UserList from './UserList'
import UserAdd from './UserAdd'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

function App() {


  return (


    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/add-user" element={<UserAdd />} />
        </Routes>
      </main>
      <Footer />
    </div>

  )
}

export default App
