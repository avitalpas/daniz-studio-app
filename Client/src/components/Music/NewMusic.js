import React, { useState } from 'react'
import axios from 'axios'
export default function NewMusic() {

    const [newMusic, setNewMusic] = useState({
        name: '',
        difficulty: ''
    })

    function onChangeName(e) {
        let tempMusic = newMusic
        tempMusic.name = e.target.value
        setNewMusic(tempMusic)
    }

    function onChangeDifficulty(e) {
        let tempMusic = newMusic
        tempMusic.difficulty = e.target.value
        setNewMusic(tempMusic)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post('http://localhost:5000/musics/new', newMusic)
            .then(res => console.log(res.data))

        window.location = '/musics'
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

                {/* diffuculty */}
                <div className='form-group'>
                    <select name='difficulty'
                        className='form-control'
                        onChange={onChangeDifficulty}
                        placeholder='רמת קושי'
                        required
                    >
                        <option value="" disabled selected>רמת קושי:</option>
                        <option value="קל">קל</option>
                        <option value="בינוני">בינוני</option>
                        <option value="קשה">קשה</option>
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
