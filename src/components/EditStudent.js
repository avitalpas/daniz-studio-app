import React, { Component } from 'react';
import axios from 'axios';
import '../css/Global.css'

export default class EditStudent extends Component {
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
            <div id="newStudent" className='bodyDiv'>
                <form onSubmit={this.onSubmit} dir='rtl'>

                    {/* name */}
                    <div className='form-group'>
                        <label>שם:</label>

                        <input type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChangeName} />
                    </div>

                    {/* submit */}
                    <div className="form-control">
                        <input type='submit'
                            value='Create student log'
                            className='submitBtn' />
                    </div>

                </form>
            </div>
        )
    }
}
