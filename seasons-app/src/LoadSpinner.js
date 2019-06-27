import React from 'react';

const LoadSpinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    )
}


// --- NOTE: If you need some default value for your prop, defaultProps is a good solution
LoadSpinner.defaultProps = {
    message: 'Loading Your Waifu...'
}

export default LoadSpinner