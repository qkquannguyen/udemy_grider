import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    // --- NOTE: Very first function to be called before anything else
    constructor(props) {
        // --- NOTE: It is required to call 'super()' and passing in props
        // --- NOTE: 'super()' is a reference to the parent constructor function
        super(props)

        // --- NOTE: This is the state object
        // !!! NOTE: This is the only time there will be a direct assignment of the state object
        this.state = {
            // --- NOTE: If you don't know the value yet, then default to 'null'
            latitude: null,
            errorMessage: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // --- Call setState()
                // --- NOTE: Anytime you need to update the state, you will call 'setState()'
                // !!! WARN: Do not direct assign to the state object.
                // !!! NOTE: Exception --> Initialize the state in the constructor()
                this.setState({ latitude: position.coords.latitude })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        )
    }

    // --- NOTE: React says we have to define 'render'
    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)

/**
 * !Other Notes!
 * ------------------------------------------------------------------------------------------------
 * Components
 * ------------------------------------------------------------------------------------------------
 * --- Component Lifecycle
 * -------- constructor
 * -------- render
 * -------- *content will be visible on screen*
 * -------- componentDidMount
 * -------- *sit and wait for updates*
 * -------- componentDidUpdate
 * -------- *sit and wait until this component is not longer shown*
 * -------- componentWillUnmount
 */