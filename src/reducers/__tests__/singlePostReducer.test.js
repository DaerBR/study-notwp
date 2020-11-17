import singlePostReducer from "../singlePostReducer";
import { FETCH_POST } from '../../actions/types';

let dummyPost;

beforeEach(() => {
    dummyPost =  {
        "userId": 1,
        "id": 1,
        "title": "Post Title",
        "body": "Post body"
    };
});

describe('Single post reducer test', () => {
    it('handles action of FETCH_POST', () => {

        const action = {
            type: FETCH_POST,
            payload: [dummyPost]
        };
        const newState = singlePostReducer([], action);
        expect(newState).toEqual([dummyPost]);
    });
    it('handles action of unknown action type', () => {
        const action = {
            type: 'WRONG!',
            payload: []
        };
        const newState = singlePostReducer([], action);
        expect(newState).toEqual([]);
    });
});
