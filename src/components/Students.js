// import react
import React, { Component } from 'react';

// import link for router
import { Link } from 'react-router-dom';

// import axios for server requests
import axios from 'axios';

// student component
const Student = props => (
  <tr>

    {/* student name */}
    <td>{props.student.name}</td>

    {/* student actions */}
    <td>

      {/* edit student */}
      <Link to={'/students/edit/' + props.student._id }>עריכה</Link>
      |

      {/* delete student */}
      <a href='#' onClick={()=>{props.deleteStudent(props.student._id)}}>מחיקה</a>
    </td>
  </tr>
)

// students ( list ) component
export default class Students extends Component {

  // props & state
  constructor(props){
    super(props)

    // bond this to functions
    this.deleteStudent = this.deleteStudent.bind(this)

    // default state variables
    this.state = {

      // students array
      students: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students')
      .then(response => {
        this.setState({ students: response.data })
      })
      .catch(error => console.log(error))
  }

  deleteStudent(id) {
    axios.delete('http://localhost:5000/student/' + id)
      .then(res => console.log(res.data))

    this.setState({
      students: this.state.students.filter(el => el._id !== id)
    })
  }

  studentsList(){
    return this.state.students.map(curStudent => {
      return <Student student={curStudent} deleteStudent={this.deleteStudent} key={curStudent._id} />
    })
  }


  render() {
    return (
      <div id='students' className='bodyDiv'>
        <h3>התלמידים שלי</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>שם</th>
            </tr>
          </thead>
          <tbody>
            {this.studentsList()}
          </tbody>
        </table>
      </div>
    )
  }
}
