import * as actions from './actions';

const initialState = {
    testSuccessfully: null
};

export default function resourceReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case actions.TEST_RESOURCE_SUCCESS:
            return {
                ...state,
                testSuccessfully: true
            };
        case actions.TEST_RESOURCE_FAILED:
            return {
                ...state,
                testSuccessfully: false
            };
        case actions.TEST_RESOURCE_RESET:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
