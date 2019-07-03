import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    onSearchInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    // --- NOTE: Remember, this is an arrow function because its callback that we are going to pass
    // --------- to some child element.
    onFormSubmit = event => {
        // --- NOTE: This makes sures the page does not refresh upon form submit
        event.preventDefault()

        // --- TODO: Make sure to call the callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
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