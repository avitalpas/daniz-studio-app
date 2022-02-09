import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"
import '../css/Global.css'

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
            lessons: []
        }
    }

    componentDidMount() {
        
        axios.get('http://localhost:5000/students')
        .then(response=>{
            if( response.data.length > 0){
                this.setState({
                    lessons:response.data.map(student => student.name),
                    studentID: response.data[0]
                })
            }
        })
    }

    onChangeStudentID(e) {
        this.setState({
            studentID: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
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
        .then(res=>console.log(res.data))

        window.location = '/lessons'
    }

    render() {
        return (
            <div id="newLesson" className='bodyDiv'>

                <form onSubmit={this.onSubmit} dir='rtl'>

                    {/* select student */}
                    <div className="form-group">
                        <label>תלמיד:</label>

                        <select ref='studentInput'
                            required
                            className='form-control'
                            value={this.state.studentID}
                            onChange={this.onChangeStudentID}>
                            {
                                this.state.lessons.map(function (lesson) {
                                    return <option
                                        key={lesson}
                                        value={lesson}>{lesson}
                                    </option>
                                })
                            }
                        </select>
                    </div>

                    {/* description */}
                    <div className='form-group'>
                        <label>תיאור:</label>

                        <input type='text'
                            className='form-control'
                            value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>

                    {/* date */}
                    <div className="form-control">
                        <label>תאריך:</label>
                        
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    {/* submit */}
                    <div className="form-control">
                        <input type='submit'
                            value='Create lesson log'
                            className='submitBtn'/>
                    </div>
                </form>

            </div>
        )
    }
}
