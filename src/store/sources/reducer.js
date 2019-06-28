import * as actions from './actions';

export default function sourcesReducer(state = {}, action) {
    const { type } = action;
    switch(type) {
        case actions.SAVE_CONFIGURATION:
            const { payload: { name, configuration } } = action;
            return {
                ...state,
                [name]: {
                    ...configuration,
                },
            };
        default:
            return state;
    }
}