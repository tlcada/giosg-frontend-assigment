import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import config from "../../../../../config/config";
import { fetchReporting } from "../action";
import { REPORTING } from '../../../../../mock/reporting'

const accessToken = "1234";

const getUrl = (startDate, endDate) => {
    let url = config.api.url;
    url = url.replace("{start}", startDate);
    url = url.replace("{end}", endDate);
    return url;
};

describe('reporting actions', () => {
    let store;

    beforeEach(() => {
        const mockStore = configureMockStore([thunk]);
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates FETCH_REPORTING_FULFILLED when fetching reporting has been done', () => {
        const startDate = "2017-05-01";
        const endDate = "2017-06-15";

        fetchMock.getOnce(getUrl(startDate, endDate), REPORTING);

        store.dispatch(fetchReporting(startDate, endDate, accessToken)).then(() => {
            const action = store.getActions();
            expect(action[0].type).toBe("FETCH_REPORTING");
            expect(action[0].payload).resolves.toEqual(REPORTING);
        })
    });

    it('creates FETCH_REPORTING_REJECTED when an error appear', () => {
        const startDate = "2017-";
        const endDate = "2017-06";

        fetchMock.getOnce(getUrl(startDate, endDate), () => {
            throw new Error("Something went wrong")
        });

        store.dispatch(fetchReporting(startDate, endDate, accessToken)).then(() => {
            const action = store.getActions();
            expect(action[0].type).toBe("FETCH_REPORTING_REJECTED");
            expect(action[0].payload).toEqual("Something went wrong");
        })
    });
});
