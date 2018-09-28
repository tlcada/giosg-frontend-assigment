import React from 'react';
import { shallow } from 'enzyme';
import DateField from '../DateField';

describe('field', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<DateField/>);
        expect(wrapper).toMatchSnapshot();
    });
});
