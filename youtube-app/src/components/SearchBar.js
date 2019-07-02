import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    onSearchInputChange = (searchTerm) => {
        console.log(searchTerm)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Waifu Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchTerm}
                            onChange={this.onSearchInputChange}
                        />
                    </div>
                </form>
                WAIFU SEARCH BAR 
            </div>
        )
    }
}

export default SearchBar