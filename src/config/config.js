const config = {
    api: {
        // Api Documentation http://developers.giosg.com/reporting_http_api.html#chat-stats-api
        url: 'https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date={start}&end_date={end}'
    },
    // Set true if you do not have Access Token. In that case, the dates and the Access Token does not matter.
    useDummyData: false
};

export default config;
