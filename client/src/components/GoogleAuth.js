import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientID: 
                    '815259190025-m7g25r5oo7d2sg907jup1rj8lmkb42eu.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;