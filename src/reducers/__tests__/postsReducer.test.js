import postsReducer from "../postsReducer";
import { FETCH_POSTS } from '../../actions/types';

let dummyPost;

beforeEach(() => {
    dummyPost =  {
        "userId": 1,
        "id": 1,
        "title": "Post Title",
        "body": "Post body"
    };
});

describe('Postlist reducer test', () => {
    it('handles action of FETCH_POSTS', () => {
        const action = {
            type: FETCH_POSTS,
            payload: [dummyPost]
        };
        const newState = postsReducer([], action);
        expect(newState).toEqual([dummyPost]);
    });

    it('handles action of unknown action type', () => {
        const action = {
            type: 'WRONG!',
            payload: []
        };
        const newState = postsReducer([], action);
        expect(newState).toEqual([]);
    });

});
