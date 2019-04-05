import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from './reducers/user'; //move to user folder
import { reducers as alert } from 'utils/alert';
import sourcesReducer from './sources/reducer';
import trackersReducer from './trackers/reducer';

export default combineReducers({
    sources: sourcesReducer,
    trackers: trackersReducer,
    user,
    form,
    ...alert
});