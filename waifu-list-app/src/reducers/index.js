import { combineReducers } from 'redux'

const waifusReducer = () => {
    return [
        {
            name: '002',
            anime: 'Darling in FRANXX'
        },
        {
            name: 'Nino Nakano',
            anime: 'The Quintessential Quintuplets'
        },
        {
            name: 'Okita Souji Alter',
            anime: 'Fate / Grand Order'
        },
        {
            name: 'Itsuki Nakano',
            anime: 'The Quintessential Quintuplets'
        }
    ]
}

const selectedWaifuReducer = (selectedWaifu = null, action) => {
    if (action.type === 'WAIFU_SELECTED') {
        return action.payload
    }

    return selectedWaifu
}

export default combineReducers({
    waifus: waifusReducer,
    selectedWaifu: selectedWaifuReducer
})