import React, { useState } from 'react'
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from "./components/SplashScreen"
import Start from "./components/Start"
import Confession from "./components/Confession"
import Finish from "./components/Finish"
import Home from './components/Home'
import BibleReader from './components/BibleReader'
import ThemeProvider from "./components/context/ThemeContext"
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate;
  const [sinner, setSinner] = useState(() => !localStorage.getItem('bornAgain'));
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('loggedIn'));
 

  const newUserStatus = () => {
    localStorage.setItem('bornAgain', 'true')
    setSinner(false);
    navigate('/finish');
  }

  const loginHandler = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
    <ThemeProvider>
      <Router>
        <Routes>
        <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/bible" replace />
                ) : sinner ? (
                  <SplashScreen />
                ) : (
                  <Navigate to="/finish" replace />
                )
              }
            />
          {sinner && (
            <>
              <Route path='/start' element={<Start />} />
              <Route path='/confession' element={<Confession handleFinish={newUserStatus} />} />
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
