import { FETCH_USER_POSTS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USER_POSTS:
            return action.payload;
        default:
            return state;
    }

}