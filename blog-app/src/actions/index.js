import _ from 'lodash';

import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// --- NOTE: Solving over fetching with lodash method #2
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // --- NOTE: Method #1 on fetching users with lodash
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // --- NOTE: Method #2 on fetching users with lodash's 'chain'
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
        
    // --- Using thunk, you will no longer return action creator.
    // --- It is still perfectly fine to still do the usual action creator returning an action
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};


// --- NOTE: Memoizing this action won't solve the problem of multiple requests to the same Id.
// --------- You will need to call memoize outside the action.
// --- NOTE: Solving over fetching with lodash method #1
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch)
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
    
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// })