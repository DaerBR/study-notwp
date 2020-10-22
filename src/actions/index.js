import _ from 'lodash';
import server from '../apis/server';

import {
    FETCH_USERS,
    FETCH_POSTS,
    FETCH_COMMENTS,
    FETCH_USER,
    FETCH_POST,
} from "./types";

export const fetchPostsWithUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const posts = getState().posts;
    const userIds = _.uniq(_.map(posts, 'userId'));

    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
    const result = await server.get('/posts');

    dispatch({
        type: FETCH_POSTS,
        payload: result.data,
    });
};
export const fetchPost = id => async (dispatch) => {
    const result = await server.get(`/posts/${id}`);
    dispatch({
        type: FETCH_POST,
        payload: result.data,
    });
};
export const fetchUser = id => async dispatch => {
    const result = await server.get(`/users/${id}`);

    dispatch({
        type: FETCH_USER,
        payload: result.data
    });
};

export const fetchUsers = () => async dispatch => {
    const result = await server.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: result.data
    });
};

export const fetchComments = () => async dispatch => {
    const result = await server.get('/comments');

    dispatch({
       type: FETCH_COMMENTS,
       payload: result.data
    });
}