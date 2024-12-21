import React, { useState } from 'react'
import HomePage from './pages/HomePage';
import Strip from './components/Strip';
import Login from './components/Login';
import Navbar from "./components/Navbar"
const App = () => {
  const [isReg, setisReg] = useState("notlogin")
  console.log(isReg)
  return (
    <div>
      <Strip isReg={isReg} setisReg={setisReg} />
      <Navbar />
      {isReg === "loggedinpage" ? <Login setisReg={setisReg} /> : <HomePage />}
    </div>
  );
}

export default App