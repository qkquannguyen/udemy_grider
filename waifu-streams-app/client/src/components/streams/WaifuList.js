import React from 'react'
import { connect } from 'react-redux'

import { fetchWaifus } from '../../actions'

class WaifuList extends React.Component {
    componentDidMount() {
        this.props.fetchWaifus()
    }

    renderAdminButtons(waifu) {
        if (waifu.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit 
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderWaifuList() {
        return this.props.waifus.map(waifu => {
            return (
                <div className="item" key={waifu.id}>
                    {this.renderAdminButtons(waifu)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {waifu.title}
                        <div className="description">
                            {waifu.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>
                    Waifus
                </h2>
                <div className="ui celled list">
                    {this.renderWaifuList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        waifus: Object.values(state.waifus),
        currentUserId: state.auth.userId
    }
}

export default connect(
    mapStateToProps, 
    { fetchWaifus }
)(WaifuList)