import _ from 'lodash';
import server from '../apis/server';

import {
    FETCH_USERS,
    FETCH_POSTS,
    FETCH_COMMENTS,
    FETCH_POST,
    FETCH_USER_POSTS, FETCH_TODOS
} from "./types";

export const fetchTodos = () => async dispatch => {
    const result = await server.get('/todos');
    return dispatch({
        type: FETCH_TODOS,
        payload: result.data
    });
};

export const fetchPosts = () => dispatch => _fetchPosts(dispatch);
const _fetchPosts = _.memoize(async dispatch => {
    const result = await server.get('/posts');
    return dispatch({
        type: FETCH_POSTS,
        payload: result.data,
    });
});

export const fetchUserPosts = id => dispatch => _fetchUserPosts(dispatch, id);
const _fetchUserPosts = _.memoize(async (dispatch, id) => {
    const result = await server.get(`/posts?userId=${id}`);
    dispatch({
        type: FETCH_USER_POSTS,
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

export const fetchUsers = (id = null) => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
    const url = id ? `/users/${id}` : '/users'
    const result = await server.get(url);
    const payload = !Array.isArray(result.data) ? [result.data] : result.data
    dispatch({
        type: FETCH_USERS,
        payload: payload
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

