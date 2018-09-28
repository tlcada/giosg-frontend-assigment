import React from 'react';
import { shallow } from 'enzyme';
import Header from '../HeaderContent';

describe('header', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });
});
