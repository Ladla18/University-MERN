import React, { useState } from 'react'
import HomePage from './pages/HomePage';
import Strip from './components/Strip';
import Login from './components/Login';

const App = () => {
  const [isReg, setisReg] = useState("notlogin")
  console.log(isReg)
  return (
    <div>
      <Strip isReg={isReg} setisReg={setisReg} />
      {isReg === "loggedinpage" ? <Login /> : <HomePage />}
    </div>
  );
}

export default App