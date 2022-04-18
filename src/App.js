// import react modules
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'

// import main pages componenets
import TopNav from './components/TopNav/TopNav';
import Students from './components/Students/Students';
import Musics from './components/Music/Musics';
import Lessons from './components/Lessons/Lessons';

// import new forms componenets
import NewStudent from './components/Students/NewStudent'
import NewLesson from './components/Lessons/NewLesson'
import NewMusic from './components/Music/NewMusic'

// import edit forms componenets
import EditStudent from './components/Students/EditStudent'

// import details pages
import StudentDetails from './components/Students/StudentDetails';

// import fixed button componenet
import NewItem from './components/NewItem/NewItem';

// import admin components
import Settings from './components/Settings/Settings'
import Home from './components/Home/Home';
import Loading from './components/Loading';
import { useAuth0 } from '@auth0/auth0-react';

import LoginRedirect from './components/Login/LoginRedirect';
import GoogleCal from './components/Lessons/GoogleCal';

// main app function
function App() {

  const { isLoading } = useAuth0()
  const { user } = useAuth0()

  if (isLoading) {
    return <Loading />

  } else if (user != undefined) {
    return (
      <div className="App">

        <Router>

          <div>
            <TopNav />

            <Routes>

              {/* main pages */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/lessons" element={<Lessons />} />
              <Route exact path="/students" element={<Students />} />
              <Route exact path="/musics" element={<Musics />} />
              <Route exact path="/home" element={<Home />} />

              {/* message pages */}
              <Route exact path="/loading" element={<Loading />} />

              {/* new forms */}
              <Route exact path="/students/new" element={<NewStudent />} />
              <Route exact path="/lessons/new" element={<NewLesson />} />
              <Route path="/lessons/new/:id" element={<NewLesson />} />
              <Route exact path="/musics/new" element={<NewMusic />} />

              {/* edit forms */}
              <Route path="/students/edit/:id" element={<EditStudent />} />

              {/* details */}
              <Route exact path="/students/details/:id" element={<StudentDetails />} />

              {/* admin routes */}
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/googleCal" element={<GoogleCal />} />

            </Routes>

            <NewItem />
          </div>
        </Router>

      </div>
    );
  } else {
    return (
      <div className="App">
        <LoginRedirect />
      </div>
    )
  }


}

export default App;
