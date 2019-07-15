import React from 'react'

import config from '../config'

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: config.clientId,
                scope: config.EMAIL
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ 
                    isSignedIn: this.auth.isSignedIn.get() 
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }
    
    // --- NOTE: These helper function are optional but gives future engineers a clear itnent of
    // --------- your code
    onSignIn = () => {
        this.auth.signIn()
    }

    onSignout = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignout} className="ui red google button"> 
                    <i className="google icon" />
                    Sign out
                </button>
            )
        } else {
            return (
                <button  onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth