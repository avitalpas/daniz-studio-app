import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(

    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
    , document.getElementById('root'));