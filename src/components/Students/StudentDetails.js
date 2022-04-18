import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import '../../css/Global.scss'
import '../../css/StudentDetails.scss'
import NavButtons from './NavButtons';
import StudentDetailsActions from './StudentDetailsActions';
import StudentFullDetails from './StudentFullDetails'
import StudentHeader from './StudentHeader';

export default function StudentDetails(props) {

  const [student, setStudent] = useState({})
  const [isMounted, setIsMounted] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (!isMounted) {
      axios.get('http://localhost:5000/students/' + id)
        .then(response => {
          setStudent(response.data)
          console.log(student);
        })
        .catch(error => console.log(error))

      setIsMounted(true)
    }
  })

  return (

    <div id='student-details' className='bodyDiv'>

      <NavButtons from='students' />

      <h3>פרטי תלמיד</h3>

      {/* name */}
      <StudentHeader student={student} />

      {/* actions */}
      <StudentDetailsActions student={student} />

      {/* more */}
      <p>כאן יופיעו שיעורים עתידיים ופרטים נוספים :)</p>

    </div>
  )
}
