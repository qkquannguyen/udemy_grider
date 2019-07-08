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

    componentDidMount() {
        // --- NOTE: This will default the search to "Best Waifus" right at load time
        this.onTermSubmit('Best Waifus')
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
            videosReturned: response.data.items,
            selectedVideo: response.data.items[0]
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
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videosReturned} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App