import React, { useEffect, useState } from 'react';
import  { Link, useParams } from "react-router-dom";
import '../../css/Global.scss'
import axios from 'axios';

export default function MusicDetails(props) {

    const [music, setMusic] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get( props.HEROKU + '/musics/' + id)
          .then(response => {
            setMusic(response.data)
          })
          .catch(error => console.log(error))
    },[])

    function addPrintedNotes(instrument){
        console.log(instrument)

        let tempMusic = music

        if(tempMusic.printedNotes == undefined){
            tempMusic.printedNotes = {
                [instrument]: 1
            }
            
            document.getElementById(instrument+'-value').innerHTML = 1

        } else if( tempMusic.printedNotes[instrument] == undefined){

            tempMusic.printedNotes[instrument] = 1
            document.getElementById(instrument+'-value').innerHTML = 1

        } else {
            tempMusic.printedNotes[instrument]++
            document.getElementById(instrument+'-value').innerHTML = tempMusic.printedNotes[instrument]
        }

        setMusic(tempMusic)
        axios.post('http://localhost:5000/musics/updatePrintedSheets/' + id, music)
            .then(res => console.log(res.data))
        console.log(music)
    }

    function reducePrintedNotes(instrument){
        console.log(instrument)

        let tempMusic = music

        if(tempMusic.printedNotes == undefined){
            console.log('cant reduce from 0')

        } else if( tempMusic.printedNotes[instrument] == undefined){
            console.log('cant reduce from 0')

        } else {
            tempMusic.printedNotes[instrument]--
            document.getElementById(instrument+'-value').innerHTML = tempMusic.printedNotes[instrument]
        }

        setMusic(tempMusic)
        console.log(music)
    }

    function getPrintedNotes(instrument){

        if( music.printedNotes != null ){
            console.log('has printed notes')

            if(music.printedNotes[instrument] != undefined){
                console.log(instrument + ': ' + music.printedNotes[instrument])
                return music.printedNotes[instrument]
            } else {
                console.log(instrument + ': 0')
                return 0
            }
        }
        return 0
    }

    function deleteMusic(id) {
        axios.delete( props.HEROKU + '/musics/' + id)
          .then(res => console.log(res.data))
        
        window.location = '/musics'
      }

    return (
        <div className='bodyDiv'>
            <h3>פרטי יצירה</h3>

            <h4>{music.name}</h4>

            {/* actions */}
            <div id='music-actions'>
                {/* schedule lesson */}
                <div className="action-link">
                    <Link to={'/lessons/new/music-source/'+ music._id} >
                        <i className="fas fa-user-plus"></i>
                    </Link>
                </div>
                
                {/* edit music */}
                <div className="action-link">
                    <Link to={'/musics/edit/' +  music._id} >
                        <i className="far fa-edit"></i>
                    </Link>
                </div>

                {/* delete music */}
                <div className="action-link delIcon">
                    <a href='#' onClick={() => { deleteMusic( music._id ) }}>
                        <i className="fas fa-trash del-icon"></i>
                    </a>
                </div>
            </div>

            {/* printed notes */}
            <div id='printed-notes'>

                <h5>תווים מודפסים</h5>

                <div className='instrument-div'>
                    <p>אורגן</p>
                    <p id='organ-value'>{getPrintedNotes('organ')}</p>
                    <button className='add' onClick={() => { addPrintedNotes('organ') }}>+</button>
                    <button className='reduce' onClick={() => { reducePrintedNotes('organ') }}>-</button>

                </div>

                <div className='instrument-div'>
                    <p>פסנתר</p>
                    <p id='piano-value'>{getPrintedNotes('piano')}</p>
                    <button className='add' onClick={() => { addPrintedNotes('piano') }}>+</button>
                    <button className='reduce' onClick={() => { reducePrintedNotes('piano') }}>-</button>
                </div>


            </div>


        </div>
    )
}
