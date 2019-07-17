import React from 'react'
import { connect } from 'react-redux'

import { fetchWaifus } from '../../actions'

class WaifuList extends React.Component {
    componentDidMount() {
        this.props.fetchWaifus()
    }

    renderWaifuList() {
        return this.props.waifus.map(waifu => {
            return (
                <div className="item" key={waifu.id}>
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
        waifus: Object.values(state.waifus)
    }
}

export default connect(
    mapStateToProps, 
    { fetchWaifus }
)(WaifuList)