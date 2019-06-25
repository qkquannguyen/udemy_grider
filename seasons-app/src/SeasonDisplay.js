import React from 'react';

const seasonConfig = {
    summer: {
        seasonText: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        seasonText: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter'
    } else {
        return latitude > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth())
    // --- NOTE: This pulls the seasonConfig object --> { seasonText, iconName } 
    const { seasonText, iconName } = seasonConfig[season]

    return (
        <div>
            <i className={`${iconName} icon`}/>
            <h1> {seasonText} </h1>
            <i className={`${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay