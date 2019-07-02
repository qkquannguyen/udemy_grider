import React from 'react'

import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'

class App extends React.Component {
    state = {
        waifus: []
    }
    // // --- NOTE: Using A Promise
    // onSearchSubmit(term) {
    //     // --- Call to Axios Function
    //     axios.get('/search/photos', {
    //         params: { 
    //             query: term 
    //         }
    //     }).then((response) => {
    //         // --- NOTE: This is essentially a callback from whatever we get from Unsplash API
    //         console.log(response.data.results)
    //     })
    // }

    // --- NOTE: Using the async keyword
    onSearchSubmit = async (term) => {
        // --- Call to Axios Function
        const response = await unsplash.get('/search/photos', {
            params: { 
                query: term 
            } 
        })
        
        this.setState({ waifus: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.waifus.length} Waifus
            </div>
        )
    }
}

export default App