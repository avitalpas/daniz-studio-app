import React from 'react'

export default function GoogleCal() {

    var gapi = window.gapi
    var CLIENT_ID = '746092633650-v0fphempfqmfkr5g9c012g5n4l3vjpj0.apps.googleusercontent.com'
    var API_KEY = 'AIzaSyAWXerrKcT68ZhScxpu0BzC6QXCAqyZG60'
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid";

    function handleClick() {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {

                    gapi.client.calendar.events.list({
                        'calendarId': 'primary',
                        'timeMin': (new Date()).toISOString(),
                        'showDeleted': false,
                        'singleEvents': true,
                        'maxResults': 10,
                        'orderBy': 'startTime'
                    }).then( response => {
                        const events = response.result.items
                        console.log(events)
                    })
                })

        })
    }
    return (
        <div className='bodyDiv'>
            <br />
            <br />
            <br />
            <button onClick={handleClick}>get events</button>
        </div>
    )
}
