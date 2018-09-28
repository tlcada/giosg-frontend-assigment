export const get = (url, accessToken, resolve, rejected) => {
    return (dispatch) => {
        return fetch(url, {
            method: "GET",
            cache: "no-cache",
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Token ' + accessToken
            }
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(resolve(response.json()));
        }).catch(err => {
            dispatch(rejected(err.message))
        });
    };
};
