// import react modules
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import stylesheets
import './App.css';

// import main pages componenets
import TopNav from './components/TopNav';
import Students from './components/Students';
import Musics from './components/Musics';
import Lessons from './components/Lessons';

// import new forms componenets
import NewStudent from './components/NewStudent'
import NewLesson from './components/NewLesson'
import NewMusic from './components/NewMusic'

// import edit forms componenets
import EditStudent from './components/EditStudent'
import EditLesson from './components/EditLesson'

// import fixed button componenet
import NewItem from './components/NewItem';

// main app function
function App() {
  return (
    <div className="App">

      <Router>

        <div className="container">
          <TopNav />

          <Routes>

            {/* main pages */}
            <Route exact path="/" element={<Lessons />} />
            <Route exact path="/lessons" element={<Lessons />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/musics" element={<Musics />} />

            {/* new forms */}
            <Route exact path="/students/new" element={<NewStudent />} />
            <Route exact path="/lessons/new" element={<NewLesson />} />
            <Route exact path="/musics/new" element={<NewMusic />} />

            {/* edit forms */}
            <Route path="/lessons/edit/:id" element={<EditLesson />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />

          </Routes>

          <NewItem />
        </div>
      </Router>

    </div>
  );
}

export default App;
