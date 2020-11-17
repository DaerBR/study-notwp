import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import HeaderMenu from "../HeaderMenu";

let wrapped;

describe('App testing', () => {
    beforeEach(() => {
        wrapped = shallow(<App />);
    });
    it('Headermenu is rendered', () => {
        expect(wrapped.find(HeaderMenu)).toHaveLength(1);
    });
});
