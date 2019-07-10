import React from 'react'
import { connect } from 'react-redux'

// --- NOTE: This is not really importing an action. More realistically,
// --- this is simply importing an object
import { selectWaifu } from '../actions'

class WaifusList extends React.Component {
    renderWaifus() {
        return this.props.waifus.map((waifu) => {
            return (
                <div className="item" key={waifu.name}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectWaifu(waifu)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {waifu.name}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderWaifus()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        waifus: state.waifus
    }
}

export default connect(mapStateToProps, { selectWaifu })(WaifusList)

// !!! NOTE: Redux is not magic!
// --- Redux does not detect action creators being called and does not detect a function
// --- returning an object that is an 'action'. Hence why the action was passed into connect()