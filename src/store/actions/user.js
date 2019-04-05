export const AUTHENTICATION_QUERY = 'AUTHENTICATION:REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION:SUCCESS';
export const AUTHENTICATION_FAILED = 'AUTHENTICATION:FAILED';


export const authorize = () => {
    return (dispatch) => {
        return fetch('https://tracker.moneypark.ch')
            .then(console.log);
    }
};

