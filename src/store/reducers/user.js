const initialState = {
    key: null,
    isFetching: false,
    isAuthorized: false
};

export default function UserReducer (state = initialState, action) {
    switch(action.type) {
        case 'AUTHENTICATION:REQUEST':
            return {
                ...state,
                isFetching: true
            };
        case 'AUTHENTICATION:SUCCESS':
            return {
                ...state,
                key: action.payload.key,
                isAuthorized: true,
                isFetching: false
            };
        case 'AUTHENTICATION:FAILED':
            return {
                ...initialState
            };
        default:
            return state;
    }

}