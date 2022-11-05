import React from 'react'

export default function MusicFilter(props) {

    function diffucultyOptions() {
        return props.difficulties.map(level => {
            return <option key={level.value} value={level.value}>{level.value} - {level.label}</option>
        })
    }

    function genreOptions(){
        return props.musics.map( music => { 
            return <option key={music.genre} value={music.genre}>{music.genre}</option>
        })
    }

    return (
        <div id='musicFilterBar'>

            {/* search by name */}
            <div className='music-filter-div'>
                <input type="text" placeholder='שם יצירה' onChange={(e) => { props.onFilterChange(e.target.value, 'name') }} />
            </div>

            {/* search by author */}
            <div className='music-filter-div'>
                <input type="text" placeholder='יוצר' onChange={(e) => { props.onFilterChange(e.target.value, 'author') }} />
            </div>

            {/* filter by difficulty */}
            <div id='difficulty-filter' className='music-filter-div'>
                <select name='difficulty' onChange={(e)=>{ props.onFilterChange(e.target.value, 'difficulty')}}>
                    <option value='' defaultValue='' selected>רמה - הכל</option>
                    {diffucultyOptions()}
                </select>
            </div>

            {/* search by scale */}
            <div className='music-filter-div'>
                <input type="text" placeholder='סולם' onChange={(e) => { props.onFilterChange(e.target.value, 'scale') }} />
            </div>

            {/* filter by genre */}
            <div id='difficulty-filter' className='music-filter-div'>
                <select name='difficulty' onChange={(e)=>{ props.onFilterChange(e.target.value, 'genre')}}>
                    <option value='' defaultValue='' selected>סגנון - הכל</option>
                    {genreOptions()}
                </select>
            </div>


        </div>
    )
}
