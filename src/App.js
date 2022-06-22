import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Employees from './components/Employees';
import Counter from './components/Counter';
import UserList from './components/UserList';
import CounterRedux from './components/CounterRedux';

function App() {
  return (
    <React.Fragment>
      <NavBar />
       <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/employees' element={ <Employees/> } />
          <Route path='/counter' element={ <CounterRedux/> } />
          <Route path='/users' element={ <UserList/> } />
       </Routes>
    </React.Fragment>
    
  );
}

export default App;
