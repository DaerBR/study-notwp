import React from 'react';
import { mount } from 'enzyme';
import PostsList from "../PostsList";
import Root from "../../Root";

let wrapped;


beforeEach(() => {
    wrapped = mount(
        <Root>
            <PostsList />
        </Root>
        );
});

afterEach(() => {
    wrapped.unmount();
});

describe('Search input', () => {
    it('Has Search input', () => {
        expect(wrapped.find('#search-posts')).toHaveLength(1);
    });

    it('Update component with input', () => {
        expect(wrapped.find('#search-posts').simulate('change', { target: { value: 'sad'}}));
        wrapped.update();
        expect(wrapped.find('#search-posts').prop('value')).toEqual('sad');
    });
});


describe('Posts in postlist', () => {

    it('Has Search input', () => {
        expect(wrapped.find('#search-posts')).toHaveLength(1);
    });


});
