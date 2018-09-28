import React from 'react';
import { shallow } from 'enzyme';
import ReportingView from '../ReportingView';
import { REPORTING } from '../../../../../mock/reporting'

describe('reporting', () => {
    it('render ReportingView without crashing', () => {
        const wrapper = shallow(<ReportingView reporting={REPORTING} />);
        expect(wrapper).toMatchSnapshot();
    });
});
