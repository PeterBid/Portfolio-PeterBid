import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import SiteNavbar from './components/SiteNavbar'


function App() {
  return (
    <div className="site-wrapper">
      <HashRouter>
      {/* <SiteNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      </div>
  )
}

export default App;
