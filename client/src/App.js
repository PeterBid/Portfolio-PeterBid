import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SiteNavbar from './components/SiteNavbar'


function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
      <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;
