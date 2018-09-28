import config from '../config';

it('config file settings should match', () => {
    expect(config.api.url).toEqual('https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date={start}&end_date={end}');
    expect(config.useDummyData).toEqual(false);
});
