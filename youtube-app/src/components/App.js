import React from 'react'
import SearchBar from './SearchBar'
import VideoDetails from './VideoDetails'
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
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container">
                NO WAIFU NO LAIFU
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videosReturned} 
                />
            </div>
        )
    }
}

export default App