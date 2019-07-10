import React from 'react'

import WaifuDetails from './WaifuDetails'
import WaifuList from './WaifuList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <WaifuList />
                </div>
                <div className="column eight wide">
                    <WaifuDetails />
                </div>
            </div>
        </div>
    )
}

export default App