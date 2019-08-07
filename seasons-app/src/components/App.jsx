
import React from 'react';

import SeasonDisplay from './SeasonDisplay'
import LoadSpinner from './LoadSpinner'
import useLocation from './useLocation'

const App = () => {
    const [latitude, errorMessage] = useLocation()

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    } else if (latitude) {
        content = <SeasonDisplay latitude={latitude} />
    } else {
        content = <LoadSpinner message="Please Click Allow For a Waifu"/>
    }

    return (
        <div className="border red">
            {content}
        </div>
    )
}

export default App;

// !!! NOTE: How to write this without React Hooks
// class App extends React.Component {

//     // NOTE: Another way to write your state
//     state = { 
//         latitude: null,
//         errorMessage: ''
//     }
    
//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             position => {
//                 // --- Call setState()
//                 // --- NOTE: Anytime you need to update the state, you will call 'setState()'
//                 // !!! WARN: Do not direct assign to the state object.
//                 // !!! NOTE: Exception --> Initialize the state in the constructor()
//                 this.setState({ latitude: position.coords.latitude })
//             },
//             err => {
//                 this.setState({
//                     errorMessage: err.message
//                 })
//             }
//         )  
//     }

//     // !!! INFO: Uncommment below to run the application using a constructor and super(props)
//     // --- NOTE: Very first function to be called before anything else
//     // constructor(props) {
//     //     // --- NOTE: It is required to call 'super()' and passing in props
//     //     // --- NOTE: 'super()' is a reference to the parent constructor function
//     //     super(props)

//     //     // --- NOTE: This is the state object
//     //     // !!! NOTE: This is the only time there will be a direct assignment of the state object
//     //     this.state = {
//     //         // --- NOTE: If you don't know the value yet, then default to 'null'
//     //         latitude: null,
//     //         errorMessage: ''
//     //     }
//     // }

//     // --- NOTE: This is a helper method
//     renderContent() {
//         if (this.state.errorMessage && !this.state.latitude) {
//             return <div>Error: {this.state.errorMessage}</div>
//         }
//         if (!this.state.errorMessage && this.state.latitude) {
//             return <SeasonDisplay latitude={this.state.latitude} />
//         }

//         return <LoadSpinner message="Please Click Allow For a Waifu"/>
//     }

//     // --- NOTE: React says we have to define 'render'
//     render() {
//         return (
//             // --- NOTE: There is no class 'border red'. This is just to show an example.
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         )
//     }
// }