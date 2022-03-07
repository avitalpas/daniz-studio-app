import React, { Component } from 'react';
import axios from 'axios';
import '../../css/Global.scss'
import Lesson from './Lesson'
import LessonsCalendar from './LessonsCalendar';


export default class Lessons extends Component {
  constructor(props) {
    super(props)

    this.deleteLesson = this.deleteLesson.bind(this)

    this.state = {
      lessons: [],
      students: []
    }
  }

  // get lessons list - full students data
  componentDidMount() {
    axios.get('http://localhost:5000/lessons')
      .then(response => {
        this.setState({ lessons: response.data })
      })
      .catch(error => console.log(error))

    axios.get('http://localhost:5000/students')
      .then(response => {
        this.setState({ students: response.data })
      })
      .catch(error => console.log(error))

  }

  // delete student by ID
  deleteLesson(id) {
    axios.delete('http://localhost:5000/lessons/' + id)
      .then(res => console.log(res.data))

    this.setState({
      lessons: this.state.lessons.filter(el => el._id !== id)
    })
  }

  render() {
    return (
      <div id='calendar' className='bodyDiv'>
        <h3>רשימת השיעורים שלי</h3>

        {/* calendar */}
        <LessonsCalendar lessons={this.state.lessons} students={this.state.students}/>
      </div>
    )
  }
}
