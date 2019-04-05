import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './user';
import jira from './jira';
import rescuetime from './rescuetime';
import { reducers as alert } from 'utils/alert';

export default combineReducers({
    user,
    form,
    jira,
    rescuetime,
    ...alert
});