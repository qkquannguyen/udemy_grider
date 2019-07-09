import React from 'react'

import WaifusList from './WaifusList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <WaifusList />
                </div>
            </div>
        </div>
    )
}

export default App