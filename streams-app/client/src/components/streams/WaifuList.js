import React from 'react'
import { connect } from 'react-redux'

import { fetchWaifus } from '../../actions'

class WaifuList extends React.Component {
    componentDidMount() {
        this.props.fetchWaifus()
    }

    render() {
        return (
            <div>
                WaifuList
            </div>
        )
    }
}

export default connect(
    null, 
    { fetchWaifus }
)(WaifuList)