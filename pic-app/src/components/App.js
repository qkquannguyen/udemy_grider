import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import config from '../config'

class App extends React.Component {
    // // --- NOTE: Using A Promise
    // onSearchSubmit(term) {
    //     // --- Call to Axios Function
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { 
    //             query: term 
    //         },    
    //         headers: {
    //             Authorization: `Client-ID ${config.UNSPLASH_ACCESS_TOKEN}`
    //         }
    //     }).then((response) => {
    //         // --- NOTE: This is essentially a callback from whatever we get from Unsplash API
    //         console.log(response.data.results)
    //     })
    // }

    // --- NOTE: Using the async keyword
    async onSearchSubmit(term) {
        // --- Call to Axios Function
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { 
                query: term 
            },    
            headers: {
                Authorization: `Client-ID ${config.UNSPLASH_ACCESS_TOKEN}`
            }
        })
        console.log(response.data.results)
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