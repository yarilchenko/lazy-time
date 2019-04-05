import * as actions from './actions';

export default function sourcesReducer(state = {}, action) {
    const { type } = action;
    switch(type) {
        case actions.SAVE_SOURCE:
            const { payload: { token, name } } = action;
            return {
                ...state,
                [name]: {
                    token,
                },
            };
        default:
            return state;
    }
}