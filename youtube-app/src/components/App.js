import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                NO WAIFU NO LAIFU
                {() => {console.log("NO WAIFU NO LAIFU")}}
                <SearchBar />
            </div>
        )
    }
}

export default App