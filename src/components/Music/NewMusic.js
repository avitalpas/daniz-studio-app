import React, { useState } from 'react'
import axios from 'axios'
import { getOptions } from 'filepond'
export default function NewMusic() {

    const [newMusic, setNewMusic] = useState({
        name: '',
        author: '',
        difficulty: '',
        noteless: false,
        scale: ''
    })

    const difficulties = [
        {
            value: 0,
            label: 'לא מסווג'
        },{
            value: 1,
            label: 'קל מאוד - מתחילים'
        },{
            value: 2,
            label: 'קל'
        },{
            value: 3,
            label: 'בינוני - קל'
        },{
            value: 4,
            label: 'בינוני'
        },{
            value: 5,
            label: 'בינוני - קשה'
        },{
            value: 6,
            label: 'קשה'
        },{
            value: 7,
            label: 'מאוד קשה'
        }
    ]

    function onChangeName(e) {
        let tempMusic = newMusic
        tempMusic.name = e.target.value
        setNewMusic(tempMusic)
    }

    function onChangeAuthor(e) {
        let tempMusic = newMusic
        tempMusic.author = e.target.value
        setNewMusic(tempMusic)
    }

    function onChangeDifficulty(e) {
        let tempMusic = newMusic
        tempMusic.difficulty = e.target.value
        setNewMusic(tempMusic)
    }

    
    function onChangeNoteless(e) {
        let tempMusic = newMusic
        tempMusic.noteless = e.target.value
        setNewMusic(tempMusic)
    }

    function onChangeScale(e) {
        let tempMusic = newMusic
        tempMusic.scale = e.target.value
        setNewMusic(tempMusic)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:5000/musics/new', newMusic)
            .then(res => console.log(res.data))

        window.location = '/musics'
    }

    function diffucultyOptions(){
        return difficulties.map( level => {
            if( level.value == 0 ) {
                return (
                    <option value={level.value} selected>{level.value} - {level.label}</option>
                )
            } else {
                return (
                    <option value={level.value}>{level.value} - {level.label}</option>
                )
            }
        })
    }

    return (
        <div id="newMusic" className='bodyDiv form-float'>
            <h3>הוספת יצירה חדשה</h3>

            <form onSubmit={onSubmit} dir='rtl'>

                <p>הכנס פרטי יצירה:</p>
                {/* name */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={onChangeName}
                        placeholder='שם יצירה:'
                        required
                    />
                </div>

                {/* author */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={onChangeAuthor}
                        placeholder='יוצר:'
                        required
                    />
                </div>

                {/* diffuculty */}
                <div className='form-group'>
                    <select name='difficulty'
                        className='form-control'
                        onChange={onChangeDifficulty}
                        placeholder='רמת קושי'
                        required
                    >

                        {diffucultyOptions()}
                    </select>
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
