import * as actions from './actions';

const defaultTrackersState = {
    successfully: null
};

export default function sourcesReducer(state = defaultTrackersState, action) {
    const { type } = action;
    switch (type) {
        case actions.SAVE_CONFIGURATION:
            const { payload: { name, configuration } } = action;
            return {
                ...state,
                ...defaultTrackersState,
                [name]: configuration
            };
        case actions.CHECK_CREDENTIALS_ERROR:
            return {
                ...state,
                successfully: false
            };
        case actions.CHECK_CREDENTIALS_SUCCESS:
            return {
                ...state,
                successfully: true
            };
        default:
            return state;
    }
}