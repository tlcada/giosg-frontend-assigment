import { Model } from "./model";

export default (state = Model, action) => {
    switch (action.type) {
        case "FETCH_REPORTING_PENDING": {
            return { ...state, fetching: true }
        }
        case "FETCH_REPORTING_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                reporting: action.payload
            }
        }
        case "FETCH_REPORTING_REJECTED": {
            return { fetching: false, error: action.payload, reporting: {} }
        }
        default: {
            return state;
        }
    }
};
