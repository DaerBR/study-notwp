import { combineReducers } from 'redux';
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    user: userReducer,
    comments: commentsReducer,
    post: postReducer,
})