import React from 'react'
import { connect } from 'react-redux'

import config from '../config'
import { signIn, signOut } from '../actions'

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

    onAuthChange = isSignedIn => {
        (isSignedIn) ? this.props.signIn() : this.props.signOut()
    }
    
    // --- NOTE: These callback function are optional but gives future engineers a clear itnent of
    // --------- your code
    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignoutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignoutClick} className="ui red google button"> 
                    <i className="google icon" />
                    Sign out
                </button>
            )
        } else {
            return (
                <button  onClick={this.onSignInClick} className="ui red google button">
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

export default connect(
    null, 
    { signIn, signOut }
)(GoogleAuth)