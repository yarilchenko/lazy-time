import * as actions from '../actions/rescuetime';

const defaultState = {
    token: null
};

export default function rescuetimeReducer(state = defaultState, action) {
    const { type } = action;
    switch(type) {
        case actions.SAVE_TOKEN:
            const { payload: { token } } = action;
            return {
                ...state,
                token
            };
        default:
            return state;
    }
}