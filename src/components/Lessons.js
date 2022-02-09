import React, { Component } from 'react';
import axios from 'axios';
import '../css/Global.css'
import { Link } from 'react-router-dom';

const Lesson = props => (
  <tr>
    <td>{props.lesson.studentID}</td>
    <td>{props.lesson.description}</td>
    <td>{props.lesson.date.substring(0,10)}</td>
    <td>
      <Link to={'/lessons/edit/'+ props.lesson._id}>עריכה</Link>
      |
      <a href='#'onClick={()=>{props.deleteLesson(props.lesson._id)}}>מחיקה</a>
    </td>
  </tr>
)

export default class Lessons extends Component {
  constructor(props) {
    super(props)

    this.deleteLesson = this.deleteLesson.bind(this)

    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/lessons')
      .then(response => {
        this.setState({ lessons: response.data })
      })
      .catch(error => console.log(error))
  }

  deleteLesson(id) {
    axios.delete('http://localhost:5000/lessons/' + id)
      .then(res => console.log(res.data))

    this.setState({
      lessons: this.state.lessons.filter(el => el._id !== id)
    })
  }

  lessonsList(){
    return this.state.lessons.map(curLesson => {
      return <Lesson lesson={curLesson} deleteLesson={this.deleteLesson} key={curLesson._id} />
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
      </div>
    )
  }
}
