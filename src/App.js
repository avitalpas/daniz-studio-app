import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import TopNav from './components/TopNav/TopNav';
import Students from './components/Students/Students';
import Musics from './components/Music/Musics';
import Lessons from './components/Lessons/Lessons';
import NewStudent from './components/Students/NewStudent'
import NewLesson from './components/Lessons/NewLesson'
import NewMusic from './components/Music/NewMusic'
import EditStudent from './components/Students/EditStudent'
import EditMusic from './components/Music/EditMusic'
import StudentDetails from './components/Students/StudentDetails';
import NewItem from './components/NewItem/NewItem';
import Settings from './components/Settings/Settings'
import Home from './components/Home/Home';
import Loading from './components/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import LoginRedirect from './components/Login/LoginRedirect';

// main app function
function App() {

  // get auth0 status
  const { isLoading } = useAuth0()
  const { user } = useAuth0()

  const difficulties = [
    {
        value: 0,
        label: 'לא מסווג'
    },{
        value: 1,
        label: 'קל מאוד - מתחילים'
    },{
        value: 2,
        label: 'קל'
    },{
        value: 3,
        label: 'בינוני - קל'
    },{
        value: 4,
        label: 'בינוני'
    },{
        value: 5,
        label: 'בינוני - קשה'
    },{
        value: 6,
        label: 'קשה'
    },{
        value: 7,
        label: 'מאוד קשה'
    }
]

const scales =['A', 'Ab', 'Ab-C', 'Abm', 'Am', 'B', 'Bb', 'Bbm', 'Bm', 'C', 'C#', 'C#m', 'Cm', 'D', 'Db', 'Dm', 'E', 'Eb', 'Ebm', 'Em', 'F', 'F#', 'F#m', 'Fm', 'G', 'Gb', 'Gm', ]

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
              <Route exact path="/musics" element={<Musics difficulties={difficulties} scales={scales}/>} />
              <Route exact path="/home" element={<Home />} />

              {/* message pages */}
              <Route exact path="/loading" element={<Loading />} />

              {/* new forms */}
              <Route exact path="/students/new" element={<NewStudent />} />
              <Route exact path="/lessons/new" element={<NewLesson />} />
              <Route path="/lessons/new/:id" element={<NewLesson />} />
              <Route exact path="/musics/new" element={<NewMusic difficulties={difficulties} scales={scales}/>} />

              {/* edit forms */}
              <Route path="/students/edit/:id" element={<EditStudent />} />
              <Route path="/musics/edit/:id" element={<EditMusic difficulties={difficulties}/>} />

              {/* details */}
              <Route exact path="/students/details/:id" element={<StudentDetails />} />

              {/* admin routes */}
              <Route exact path="/settings" element={<Settings />} />

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
