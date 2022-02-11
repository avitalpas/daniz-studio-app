import React, { Component } from 'react';
import axios from 'axios';

// import stylesheet
import '../css/Global.scss'

export default class NewStudent extends Component {
    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: ''
        }
    }
    

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const student = {
            name: this.state.name
        }

        console.log(student);
        axios.post('http://localhost:5000/students/new', student)
            .then(res => console.log(res.data))

        window.location = '/students'
    }

    render() {
        return (
            <div id="newStudent" className='bodyDiv form-float'>
                <h3>הוספת תלמיד חדש</h3>
                <hr/>
                <form onSubmit={this.onSubmit} dir='rtl'>

                    <p>הכנס פרטי תלמיד:</p>

                    {/* name */}
                    <div className='form-group'>
                        <input type='text'
                            className='form-control'
                            placeholder='שם:'
                            value={this.state.name}
                            onChange={this.onChangeName} />
                    </div>

                    {/* submit */}
                    <button type='submit'>הוסף תלמיד</button>

                </form>
            </div>
        )
    }
}
