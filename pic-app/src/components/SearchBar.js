import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return  (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Waifu Search</label>
                        {/* NOTE: There is no () at this method call because doing so, it will
                            ----- call the method when our component is rendered. We dont want that
                          */}
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar