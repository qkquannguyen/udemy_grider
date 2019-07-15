import React from 'react'

import config from '../config'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: config.clientId,
                scope: config.EMAIL
            })
        })
    }
    
    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth