import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    // --- NOTE: Very first function to be called before anything else
    constructor(props) {
        // --- NOTE: It is required to call 'super()' and passing in props
        // --- NOTE: 'super()' is a reference to the parent constructor function
        super(props)

        // --- NOTE: This is the state object
        this.state = {
            // --- NOTE: If you don't know the value yet, then default to 'null'
            latitude: null
        }
    }

    // --- NOTE: React says we have to define 'render'
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        )
    
        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)
