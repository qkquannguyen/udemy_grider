// --- Import Reach and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom'

// --- Create a React Component
const App = () => {
    const buttonText = { text: 'Click Me!'}
    const labelText = 'Enter Name:' 
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    )
};

// --- Take React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);