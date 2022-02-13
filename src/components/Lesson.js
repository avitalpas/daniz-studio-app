import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Lesson.scss'


export default class Lesson extends Component {

    constructor(props) {
        super(props)

        this.state = {
            student: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/students/' + this.props.lesson.studentID)
            .then(response => {
                this.setState({
                    student: response.data
                })
            })
            .catch(err => console.log("Error: " + err))
    }

    getDateTimeFormat(date) {

        var curDate = new Date(date)
        var formatedDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
        var formatedMinutes = curDate.getMinutes()
        if (formatedMinutes.toString().length < 2) formatedMinutes += '0'
        var weekDayName = curDate.toLocaleDateString('he-IL', { weekday: 'short' })
        var formatedTime = curDate.toLocaleString('he-IL', { hour: 'numeric', hour12: false }) + ':' + formatedMinutes

        return formatedDate + ' ' + weekDayName + ' ' + formatedTime
    }


    render() {
        return <tr>
            <td>{this.state.student.name}</td>
            <td>{this.props.lesson.description}</td>
            <td>{this.getDateTimeFormat(this.props.lesson.date)}</td>
            {/* lesson actions */}
            <td className='action-links'>

                {/* edit lesson */}
                <div className="actions-link">
                    <Link to={'/lessons/edit/' + this.props.lesson._id} title='עריכת שיעור'>
                        <i className="far fa-edit"></i>
                    </Link>
                </div>

                {/* delete lesson */}
                <div className="actions-link delIcon">
                    <a href='#' onClick={() => { this.props.deleteLesson(this.props.lesson._id) }} title='מחיקת שיעור'>
                        <i className="fas fa-trash del-icon"></i>
                    </a>
                </div>
            </td>
            
        </tr>
    }
}

