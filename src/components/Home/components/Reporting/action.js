import config from "../../../../config/config";
import { get } from "../../../../services/api/call";

const getReporting = (reporting) => {
    return {
        type: "FETCH_REPORTING",
        payload: reporting
    }
};

const rejected = (errorMsg) => ({
    type: "FETCH_REPORTING_REJECTED",
    payload: errorMsg
});

export const fetchReporting = (startDate, endDate, accessToken) => {
    let url = config.api.url;
    url = url.replace("{start}", startDate);
    url = url.replace("{end}", endDate);
    return get(url, accessToken, getReporting, rejected);
};
