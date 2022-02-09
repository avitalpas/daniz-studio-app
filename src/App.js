import './App.css';
import React from 'react'
import TopNav from './components/TopNav';
import Students from './components/Students';
import Music from './components/Music';
import Lessons from './components/Lessons';
import NewItem from './components/NewItem';
import NewStudent from './components/NewStudent'
import NewLesson from './components/NewLesson'
import EditStudent from './components/EditStudent'
import EditLesson from './components/EditLesson'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <Router>

        <div className="container">
          <TopNav />

          <Routes>

            <Route exact path="/" element={<Lessons />} />
            <Route exact path="/lessons" element={<Lessons />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/students/new" element={<NewStudent />} />
            <Route exact path="/lessons/new" element={<NewLesson />} />
            <Route path="/lessons/edit/:id" element={<EditLesson />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />
            <Route exact path="/music" element={<Music />} />

          </Routes>

          <NewItem />
        </div>
      </Router>

    </div>
  );
}

export default App;
