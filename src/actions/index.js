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


export const fetchPosts = () => dispatch => _fetchPosts(dispatch);
const _fetchPosts = _.memoize(async dispatch => {
    const result = await server.get('/posts');

    dispatch({
        type: FETCH_POSTS,
        payload: result.data,
    });
});

export const fetchPost = id => dispatch => _fetchPost(id, dispatch);
const _fetchPost = _.memoize(async (id, dispatch) => {
    const result = await server.get(`/posts/${id}`);

    dispatch({
        type: FETCH_POST,
        payload: result.data
    });
});


export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
    const result = await server.get(`/users/${id}`);

    dispatch({
        type: FETCH_USER,
        payload: result.data
    });
});

export const fetchUsers = () => dispatch => _fetchUsers(dispatch);
const _fetchUsers = _.memoize(async dispatch => {
    const result = await server.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: result.data
    });
});


export const fetchComments = () => dispatch => _fetchComments(dispatch);
const _fetchComments = _.memoize(async dispatch => {
    const result = await server.get('/comments');

    dispatch({
        type: FETCH_COMMENTS,
        payload: result.data
    });
});
