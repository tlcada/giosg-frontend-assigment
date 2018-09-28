import React from 'react';
import { shallow } from 'enzyme';
import CustomPaginationActionsTable from '../CustomPaginationActionsTable';
import { REPORTING } from '../../../mock/reporting'

describe('header', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CustomPaginationActionsTable rows={REPORTING.by_date} />);
        expect(wrapper).toMatchSnapshot();
    });
});
