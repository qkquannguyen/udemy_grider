import waifus from '../apis/waifus'
import { 
    SIGN_IN, 
    SIGN_OUT,
    CREATE_WAIFU,
    DELETE_WAIFU,
    EDIT_WAIFU,
    FETCH_WAIFU,
    FETCH_WAIFUS
} from './types'

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createWaifu = formValues =>  async dispatch => {
    const response = await waifus.post('/waifus', formValues)
    dispatch({
        type: CREATE_WAIFU,
        payload: response.data
    })
}

export const deleteWaifu = id => async dispatch => {
    await waifus.delete(`/waifus/${id}`)

    dispatch({
        type: DELETE_WAIFU,
        payload: id
    })
}

export const editWaifu = (id, formValues) => async dispatch => {
    const response = await waifus.put(`/waifus/${id}`, formValues)

    dispatch({
        type: EDIT_WAIFU,
        payload: response.data
    })
}

export const fetchWaifu = id => async dispatch => {
    const response = await waifus.get(`/waifus/${id}`)

    dispatch({
        type: FETCH_WAIFU,
        payload: response.data
    })
}

export const fetchWaifus = () => async dispatch => {
    const response = await waifus.get('/waifus')

    dispatch({
        type: FETCH_WAIFUS,
        payload: response.data
    })
}
