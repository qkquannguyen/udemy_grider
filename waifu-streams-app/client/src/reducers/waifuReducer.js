import _ from 'lodash'

import {
    CREATE_WAIFU,
    DELETE_WAIFU,
    EDIT_WAIFU,
    FETCH_WAIFU,
    FETCH_WAIFUS
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_WAIFU:
            return {  ...state, [action.payload.id]: action.payload }
        case DELETE_WAIFU:
            return _.omit(state, action.payload)
        case EDIT_WAIFU:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_WAIFU:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_WAIFUS:
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        default:
            return state
    }
}