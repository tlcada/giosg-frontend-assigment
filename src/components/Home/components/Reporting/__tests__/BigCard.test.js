import React from 'react';
import { shallow } from 'enzyme';
import BigCard from '../BigCard';

describe('reporting', () => {
    it('render BigCard without crashing', () => {
        const wrapper = shallow(<BigCard title={'Test'} content={2} />);
        expect(wrapper).toMatchSnapshot();
    });
});
