import React from 'react';
import { shallow } from 'enzyme';
import HomeArea from '../HomeArea';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe('home', () => {
    let store;

    beforeEach(() => {
        const mockStore = configureMockStore([thunk]);
        store = mockStore({});
    });

    it('renders without crashing', () => {
        const wrapper = shallow(<HomeArea store={store} />).dive();
        expect(wrapper).toMatchSnapshot();
    });
});
