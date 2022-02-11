// import react
import React, { Component } from 'react';

// import axios for db requests
import axios from 'axios';

// import date picker
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css"
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

// import stylsheet
import '../css/Global.scss'

export default class NewLesson extends Component {
    constructor(props) {
        super(props)

        this.onChangeStudentID = this.onChangeStudentID.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            studentID: '',
            description: '',
            date: new Date(),
            students: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/students')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        students: response.data,
                        studentID: response.data[0].name
                    })
                }
            })
    }

    onChangeStudentID(e) {
        console.log(e.target.value);
        this.setState({
            studentID: e.target.value
        })
    }

    onChangeDescription(e) {
        console.log(e.target.value);
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(dateInput) {
        console.log(dateInput.value);
        this.setState({
            date: dateInput.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const lesson = {
            studentID: this.state.studentID,
            description: this.state.description,
            date: this.state.date
        }

        console.log(lesson);
        axios.post('http://localhost:5000/lessons/new', lesson)
            .then(res => console.log(res.data))

        window.location = '/lessons'
    }

    render() {
        return (
            <div id="newLesson" className='bodyDiv form-float'>
                <h3>הוספת שיעור חדש</h3>
                <hr />
                <form onSubmit={this.onSubmit} dir='rtl'>

                    <p>הכנס פרטי שיעור:</p>
                    {/* select student */}
                    <div className="form-group">
                        <select ref='studentInput'
                            required
                            className='form-control'
                            onChange={this.onChangeStudentID}>
                            <option selected disabled>בחר תלמיד</option>
                            {
                                this.state.students.map(student => {
                                    return <option key={student._id} value={student._id}>{student.name}</option>
                                })
                            }
                        </select>
                    </div>

                    {/* description */}
                    <div className='form-group'>
                        <input type='text'
                            className='form-control'
                            placeholder='תיאור:'
                            value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>

                    {/* date */}
                    <div className='form-control dateInput'>
                        <p>מתי?</p>
                        <div className="dateTimePicker">
                            <DateTimePickerComponent onChange={this.onChangeDate}
                                                     placeholder='בחר תאריך ושעה'
                                                     format="dd/MM/yyyy HH:mm"
                            ></DateTimePickerComponent>
                        </div>
                    </div>


                    {/* submit */}
                    <button type='submit'
                        value='Create lesson log'
                        className='submitBtn'>
                        קבע שיעור
                    </button>

                </form>

            </div>
        )
    }
}
