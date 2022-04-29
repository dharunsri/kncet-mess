import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FoodMenu from './Components/FoodMenu';
import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/menu' element={<FoodMenu/>}/>
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
