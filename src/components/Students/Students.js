// import react
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './Student'
import '../../css/Students.scss'

export default function Students(props) {

  const [students, setStudents] = useState([])
  const [originStudents, setOriginStudents] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {

        response.data.sort((a, b) => {
          let fa = a.name
          let fb = b.name

          if (fa < fb) return -1
          if (fa > fb) return 1
          else return 0
        })

        setStudents(response.data)
      })
      .catch(error => console.log(error))
  })


  function studentsList() {
    return students.map(curStudent => {
      return <Student student={curStudent} key={curStudent._id} />
    })
  }

  function onStudentSearchChange(e) {
    if (e.target.value == '') {
      setStudents(originStudents)
    } else {
      filterStudents(students, e.target.value)
    }
  }

  function filterStudents(array, string){

    let tempArr = array
    tempArr = tempArr.filter(stu => stu.name.includes(string))

    setStudents(tempArr)
  }

  return (
    <div id='students' className='bodyDiv'>

      {/* header */}
      <h3>התלמידים שלי</h3>

      {/* search */}
      <div id="students-search">
        <i className="fas fa-filter"></i>
        <input type="text" placeholder='חיפוש' onChange={onStudentSearchChange} />
        <i className="fas fa-search"></i>
      </div>

      {/* students list */}
      <table className="table">
        <tbody>
          {studentsList()}
        </tbody>
      </table>
    </div>
  )
}
