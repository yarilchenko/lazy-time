import * as actions from './actions';

export default function sourcesReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case actions.SAVE_CONFIGURATION:
            const { code, ...configuration } = payload;

            return {
                ...state,
                [code]: configuration,
            };
        default:
            return state;
    }
}