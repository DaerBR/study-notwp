import { combineReducers } from 'redux';
import postsReducer from "./postsReducer";
import singlePostReducer from "./singlePostReducer";
import usersPostsReducer from "./usersPostsReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    post: singlePostReducer,
    todos: todosReducer,
    usersPosts: usersPostsReducer
})