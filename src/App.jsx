import React, { useEffect, useState } from 'react'
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from "./components/SplashScreen"
import Start from "./components/Start"
import Confession from "./components/Confession"
import Finish from "./components/Finish"
import Home from './components/Home'
import BibleReader from './components/BibleReader'
import ThemeProvider from "./components/context/ThemeContext"



function App() {
  const [sinner, setSinner] = useState(() => !localStorage.getItem('bornAgain'));

  const newUserStatus = () => {
    localStorage.setItem('bornAgain', 'true')
    setSinner(false);
  }

  return (
    <>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
          path='/'
          element={sinner ? <SplashScreen /> : <Navigate to="/finish" replace />} 
          />
          {sinner && (
            <>
              <Route path='/start' element={<Start />} />
              <Route path='/confession' element={<Confession userStatus={newUserStatus} />} />
            </>
          )}
          <Route path='finish' element={<Finish />} />
          <Route path='home' element={<Home />} />
          <Route path='bible' element={<BibleReader />} />
          <Route 
          path="*"
          element={<Navigate to={sinner ? "/" : "/finish"} replace />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
