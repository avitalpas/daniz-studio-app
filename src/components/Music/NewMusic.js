import React, { useState } from 'react'
import axios from 'axios'
import '../../css/Global.scss'

export default function NewMusic(props) {

    const [newMusic, setNewMusic] = useState({
        name: '',
        author: '',
        difficulty: '',
        reCreated: false,
        mastering: false,
        fillIn: false,
        noteless: false,
        scale: '',
        accomp: '',
        bpm: '',
        tempo: '',
        weight: '',
        genre: ''
    })

    const difficulties = props.difficulties

    function onFieldChange(e, fieldName) {
        let tempMusic = newMusic
        tempMusic[fieldName] = e.target.value
        setNewMusic(tempMusic)
    }

    function onSubmit(e) {
        e.preventDefault()

        axios.post(props.HEROKU+ '/musics/new', newMusic)
            .then(res => console.log(res.data))

        window.location = '/musics'
    }

    function diffucultyOptions() {
        return difficulties.map(level => {
            if (level.value == 0) {
                return (
                    <option key={level.value} value={level.value} selected>{level.value} - {level.label}</option>
                )
            } else {
                return (
                    <option key={level.value} value={level.value}>{level.value} - {level.label}</option>
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
                        onChange={(e) => { onFieldChange(e, 'name') }}
                        placeholder='שם יצירה:'
                        required
                    />
                </div>

                {/* author */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'author') }}
                        placeholder='יוצר:'
                        required
                    />
                </div>

                {/* diffuculty */}
                <div className='form-group'>

                    <div className='fieldWithHeader'>

                        <p className='fieldHeader'>רמת קושי:</p>

                        <select name='difficulty'
                            className='form-control'
                            onChange={(e) => { onFieldChange(e, 'difficulty') }}
                            placeholder='רמת קושי'
                            
                        >

                            {diffucultyOptions()}
                        </select>
                    </div>
                </div>

                {/* reCreated */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>עשוי מחדש?</p>
                        <select name='reCreated'
                            className='form-control'
                            onChange={(e) => { onFieldChange(e, 'reCreated') }}
                            
                        >
                            <option value="false" selected>לא</option>
                            <option value="true">כן</option>
                        </select>
                    </div>
                </div>

                {/* mastering */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>מאסטרינג?</p>
                        <select name='reCreated'
                            className='form-control'
                            onChange={(e) => { onFieldChange(e, 'mastering') }}
                            
                        >
                            <option value="false" selected>לא</option>
                            <option value="true">כן</option>
                        </select>
                    </div>
                </div>

                {/* fillIn */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>השלמת מנגינה?</p>
                        <select name='reCreated'
                            className='form-control'
                            onChange={(e) => { onFieldChange(e, 'fillIn') }}
                            
                        >
                            <option value="false" selected>לא</option>
                            <option value="true">כן</option>
                        </select>
                    </div>
                </div>

                {/* noteLess */}
                <div className='form-group'>
                    <div className='fieldWithHeader'>
                        <p className='fieldHeader'>נגינה ללא תווים?</p>
                        <select name='reCreated'
                            className='form-control'
                            onChange={(e) => { onFieldChange(e, 'noteLess') }}
                            
                        >
                            <option value="false" selected>לא</option>
                            <option value="true">כן</option>
                        </select>
                    </div>
                </div>

                {/* scale */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'scale') }}
                        placeholder='סולם'
                        
                    />
                </div>

                {/* bpm */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'bpm') }}
                        placeholder='bpm'
                        
                    />
                </div>

                {/* tempo */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'tempo') }}
                        placeholder='Tempo'
                        
                    />
                </div>

                {/* weight */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'weight') }}
                        placeholder='משקל'
                        
                    />
                </div>

                {/* genre */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'genre') }}
                        placeholder='זאנר'
                        
                    />
                </div>

                {/* accomp */}
                <div className='form-group'>
                    <input type='text'
                        className='form-control'
                        onChange={(e) => { onFieldChange(e, 'accomp') }}
                        placeholder='ליווי'
                        
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
