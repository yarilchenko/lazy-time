import { SET_ALERT } from './actions';

function alertMessage(state = {}, action) {
    if (action.type === SET_ALERT) {
        return action.payload;
    }
    return state;
}

export default { alertMessage };
