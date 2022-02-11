import React, { Component } from 'react';
import axios from 'axios';

// import stylesheet
import '../css/Global.css'

import React, { Component } from 'react';

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
            <div id="newMusic" className='bodyDiv'>
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
                            value='הוסף'
                            className='submitBtn' />
                    </div>

                </form>
            </div>
        )
    }
}
