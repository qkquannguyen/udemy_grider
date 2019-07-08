import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../api/youtube'

class App extends React.Component {
    state = {
        videosReturned: [],
        selectedVideo: null
    }

    // --- NOTE: Remember this is an asychronous GET request so you must use a Promise or the
    // --------- 'await' syntax
    onTermSubmit = async searchTerm => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
        this.setState({
            videosReturned: response.data.items
        })
    }

    onVideoSelect = video => {
        console.log('From the App!', video);
    }

    render() {
        return (
            <div className="ui container">
                NO WAIFU NO LAIFU
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videosReturned} />
            </div>
        )
    }
}

export default App