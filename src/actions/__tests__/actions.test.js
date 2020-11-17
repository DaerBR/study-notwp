import React from 'react';
import * as types from "../types";
import * as actions from "../index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("changePurchaseStatus", () => {
    it("has correct action type", async () => {
        const store = mockStore();
        await store.dispatch(actions.fetchPosts());
        const storeActions = store.getActions();
        expect(storeActions[0].type).toEqual(types.FETCH_POSTS);
    });
});
