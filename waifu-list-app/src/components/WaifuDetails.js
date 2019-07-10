import React from 'react'
import { connect } from 'react-redux'

const WaifuDetails = ({ waifu }) => {
    if (!waifu) {
        return <div>Select a Waifu</div>
    }
    return (
        <div>
            <h1>
                {waifu.name}
                <hr />
            </h1>
            <h4>
                {waifu.anime}
            </h4>
            <img src={waifu.img} alt="No Waifu No Laifu" />
        </div>
    )
}

const mapStateToProps = state => {
    return { waifu: state.selectedWaifu }
}

export default connect(mapStateToProps)(WaifuDetails)