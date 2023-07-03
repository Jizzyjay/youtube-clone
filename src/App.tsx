import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import WatchVideo from './pages/WatchVideo'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watch/:id" element={<WatchVideo />} />
      </Routes>
    </BrowserRouter>
  )
}
