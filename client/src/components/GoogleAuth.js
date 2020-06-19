import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientID: 
                    '815259190025-m7g25r5oo7d2sg907jup1rj8lmkb42eu.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in.</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in.</div>
        } else {
            return <div>I am not signed In.</div>
        }
    }

    render() {
        return <div>{ this.renderAuthButton() }</div>
    }
}

export default GoogleAuth;