import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    state = {
        term: ''
    }

    render() {
        return  (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Waifu Search</label>
                        {/* NOTE: There is no () at this method call because doing so, it will
                            ---s-- call the method when our component is rendered. We dont want that
                          */}
                        {/* <input type="text" onChange={this.onInputChange}/> */}
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar

// !!! NOTE: Uncontrolled vs Controlled
// !!! --------------------------------------------------------------------------------------------
// --- Uncontrolled Component: Information is stored in the DOM. This is a bad practice and should
// --- not be used in this manner.
// --- Controlled Component: Information is stored in the Component.  