// import react modules
import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'

// import stylesheets
import './App.css';

// import main pages componenets
import TopNav from './components/TopNav';
import Students from './components/Students';
import Musics from './components/Musics';
import Lessons from './components/Lessons';
import Test from './components/Test';

// import new forms componenets
import NewStudent from './components/NewStudent'
import NewLesson from './components/NewLesson'
import NewMusic from './components/NewMusic'

// import edit forms componenets
import EditStudent from './components/EditStudent'
import EditLesson from './components/EditLesson'

// import details pages
import StudentDetails from './components/StudentDetails';

// import fixed button componenet
import NewItem from './components/NewItem';

// import admin components
import Settings from './components/Settings'
import NewCustomField from './components/NewCustomField'

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
            <Route path="/students/edit/:id" element={<EditStudent/>} />

            {/* details */}
            <Route exact path="/students/details/:id" element={<StudentDetails />} />

            {/* admin routes */}
            <Route exact path="/settings" element={<Settings />} />
            {/* <Route exact path="/customfield/new" element={<NewCustomField />} /> */}


          </Routes>

          <NewItem />
        </div>
      </Router>

    </div>
  );
}

export default App;
