import React, { Component } from 'react';
import axios from 'axios';
import '../../css/Global.scss'
import Lesson from './Lesson'
import LessonsCalendar from './LessonsCalendar';


export default class Lessons extends Component {
  constructor(props) {
    super(props)

    this.deleteLesson = this.deleteLesson.bind(this)
    this.lessonsList = this.lessonsList.bind(this)

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

  lessonsList(){    

    return this.state.lessons.map(curLesson => {
      return <Lesson lesson={curLesson} 
                     deleteLesson={this.deleteLesson} 
                     key={curLesson._id} 
              />
    })
  }

  render() {
    return (
      <div id='calendar' className='bodyDiv'>
        <h3>רשימת השיעורים שלי</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>תלמיד</th>
              <th>תיאור</th>
              <th>תאריך</th>
            </tr>
          </thead>
          <tbody>
            {this.lessonsList()}
          </tbody>
        </table>

        {/* calendar */}
        <LessonsCalendar/>
      </div>
    )
  }
}
