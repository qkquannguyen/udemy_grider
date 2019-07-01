import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import config from '../config'

class App extends React.Component {
    onSearchSubmit(term) {
        // --- Call to Axios Function
        axios.get('https://api.unsplash.com/search/photos', {
            params: { 
                query: term 
            },    
            headers: {
                Authorization: `Client-ID ${config.UNSPLASH_ACCESS_TOKEN}`
            }
        })
        console.log("yay")
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App