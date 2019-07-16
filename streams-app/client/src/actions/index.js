import waifus from '../apis/waifus'
import { CREATE_WAIFU, SIGN_IN, SIGN_OUT } from './types'

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