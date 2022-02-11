import React, { Component } from 'react';
import axios from 'axios'

export default class NewMusic extends Component {
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

        const music = {
            name: this.state.name
        }

        console.log(music);
        axios.post('http://localhost:5000/musics/new', music)
            .then(res => console.log(res.data))

        window.location = '/musics'
    }


    render() {
        return (
            <div id="newMusic" className='bodyDiv form-float'>
                <h3>הוספת יצירה חדשה</h3>
                <hr/>
                <form onSubmit={this.onSubmit} dir='rtl'>

                    <p>הכנס פרטי יצירה:</p>
                    {/* name */}
                    <div className='form-group'>
                        <input type='text'
                            className='form-control'
                            value={this.state.name}
                            onChange={this.onChangeName}
                            placeholder='שם יצירה:'
                         />
                    </div>

                    {/* submit */}
                    <button type='submit'
                            value='הוסף'
                            className='submitBtn'>
                            הוספת יצירה
                    </button>

                </form>
            </div>
        )
    }
}
