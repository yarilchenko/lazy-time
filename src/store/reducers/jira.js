import * as actions from '../actions/jira';


const defaultState = {
    successTested: null,
    token: null,
    url: null
};

export default function jiraReducer(state = defaultState, action) {
    const { type } = action;
    switch(type) {
        case actions.SAVE_CREDENTIALS:
            const { payload: { values } } = action;
            return {
                ...state,
                token: btoa(`${values.login}:${values.password}`),
                url: values.url
            };
        case actions.CHECK_CREDENTIALS_ERROR:
            return {
                ...state,
                successTested: false
            };
        case actions.CHECK_CREDENTIALS_SUCCESS:
            return {
                ...state,
                successTested: true
            };
        default:
            return state;
    }
}