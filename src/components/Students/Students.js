// import react
import React, { Component } from 'react';

// import axios for server requests
import axios from 'axios';

import Student from './Student'

import '../../css/Students.scss'


// students ( list ) component
export default class Students extends Component {

  // props & state
  constructor(props) {
    super(props)

    // bond this to functions
    this.deleteStudent = this.deleteStudent.bind(this)
    this.onStudentSearchChange = this.onStudentSearchChange.bind(this)

    // default state variables
    this.state = {

      // students array
      students: [], 
      tempStudents: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students')
      .then(response => {

        response.data.sort((a,b)=>{
          let fa = a.name
          let fb = b.name

          if( fa < fb ) return -1
          if( fa > fb ) return 1
          else return 0
        })
        
        this.setState({ 
          students: response.data,
          tempStudents: response.data
         })
      })
      .catch(error => console.log(error))
  }

  deleteStudent(id) {
    axios.delete('http://localhost:5000/students/' + id)
      .then(res => console.log(res.data))

    this.setState({
      students: this.state.students.filter(el => el._id !== id)
    })
  }

  studentsList() {
    return this.state.students.map(curStudent => {
      return <Student student={curStudent} deleteStudent={this.deleteStudent} key={curStudent._id}/>
    })
  }

  onStudentSearchChange(e){
    if( e.target.value == '') {
      this.setState({
        students: this.state.tempStudents
      })
    } else {
      this.filterStudents(this.state.tempStudents, e.target.value)
    }
  }

  filterStudents(array, string){

    let tempArr = array
    tempArr = tempArr.filter( stu => stu.name.includes(string))
    
    this.setState({ students: tempArr })
  }

  render() {
    return (
      <div id='students' className='bodyDiv'>

        {/* header */}
        <h3>התלמידים שלי</h3>

        {/* search */}
        <div id="students-search">
          <i className="fas fa-filter"></i>
          <input type="text" placeholder='חיפוש' onChange={this.onStudentSearchChange}/>
        <i className="fas fa-search"></i>
        </div>

        {/* students list */}
        <table className="table">
          <tbody>
            {this.studentsList()}
          </tbody>
        </table>
      </div>
    )
  }
}
