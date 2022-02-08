import './App.css';
import React, { Component } from 'react'
import TopNav from './components/TopNav';
import Students from './components/Students';
import Music from './components/Music';
import Calendar from './components/Calendar';
import NewItem from './components/NewItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <TopNav/>

      <Router>
        <Routes>

          <Route exact path="/" element={<Calendar/>}/>
          <Route exact path="/calendar" element={<Calendar/>}/>
          <Route exact path="/students" element={<Students/>}/>
          <Route exact path="/music" element={<Music/>}/>


        </Routes>
      </Router>

      <NewItem/>
    </div>
  );
}

export default App;
