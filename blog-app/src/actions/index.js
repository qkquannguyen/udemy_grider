import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
        
    // --- Using thunk, you will no longer return action creator.
    // --- It is still perfectly fine to still do the usual action creator returning an action
    dispatch({
        type: 'FETCH_POSTS',
        payload: response
    });
};
