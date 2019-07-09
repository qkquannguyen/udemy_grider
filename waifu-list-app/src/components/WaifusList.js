import React from 'react'
import { connect } from 'react-redux'

class WaifusList extends React.Component {
    renderWaifus() {
        return this.props.waifus.map((waifu) => {
            return (
                <div className="item" key={waifu.name}>
                    <div className="right floated content">
                        <button className="ui button primary">
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

export default connect(mapStateToProps)(WaifusList)