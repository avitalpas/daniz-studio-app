// import react
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './Student'
import '../../css/Students.scss'

export default function Students(props) {

  const [students, setStudents] = useState([])
  const [originStudents, setOriginStudents] = useState([])

  useEffect(() => {
    axios.get( props.HEROKU + '/students')
      .then(response => {

        console.log('getting students from server')
        response.data.sort((a, b) => {
          let fa = a.name
          let fb = b.name

          if (fa < fb) return -1
          if (fa > fb) return 1
          else return 0
        })

        setStudents(response.data)
        setOriginStudents(response.data)

      })
      .catch(error => console.log(error))
  }, [])


  // print students list
  function studentsList() {

    return students.map(curStudent => {
      return <Student student={curStudent} key={curStudent._id} />
    })
  }

  // runs when search input changes
  function onStudentSearchChange(e) {

    // if input is empty > show all students
    if (e.target.value == '') {
      setStudents(originStudents)

    // if input is not empty > filter students by input value 
    } else {
      filterStudents(originStudents, e.target.value)
    }
  }

  // filter objects array by name inclufing search string value
  function filterStudents(array, string){

    let tempArr = array
    tempArr = tempArr.filter(stu => stu.name.includes(string))
    
    setStudents(tempArr)
    console.log(tempArr)
  }

  return (
    <div id='students' className='bodyDiv'>

      {/* header */}
      <h3>התלמידים שלי</h3>

      {/* search */}
      <div id='search-div'>
        <div id="students-search">
          <i className="fas fa-filter"></i>
          <input type="text" placeholder='חיפוש' onChange={onStudentSearchChange} />
          <i className="fas fa-search"></i>
        </div>

      </div>

      {/* students list */}
      <div id='students-list'>
        <table className="table">
          <tbody>
            {studentsList()}
          </tbody>
        </table>
      </div>
    </div>
  )
}
