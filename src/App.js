import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {FoodMenu} from './Components/FoodMenu';
import Payment from './Components/Payment';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import AdminPage from './Admin/AdminPage';
import AllDetails from './Admin/AllDetails';
import QrCode from './Components/QrCode';
import Success from './Components/Success';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/all-details' element={<AllDetails/>}/>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/mess' element={<HomePage/>}/>
            <Route path='/menu' element={<FoodMenu/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/mess-token-qr' element={<QrCode/>}/>
            <Route path='/Success' element={<Success/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
