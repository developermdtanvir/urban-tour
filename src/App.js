import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Destination } from './components/Destination/Destination';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Navigation } from './components/Navigation/Navigation';
import { PrivetRoute } from './components/PrivetRoute/PrivetRoute';
import Data from './data/data.json';
export const UserContext = createContext();
function App() {

  const [travle, setTravle] = useState([])
  useEffect(() => {
    setTravle(Data);
  }, [])

  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo.email);
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home travle={travle} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/destination' element={<PrivetRoute><Destination /></PrivetRoute>} />
          <Route path='/destination/:id' element={<PrivetRoute><Destination /></PrivetRoute>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
