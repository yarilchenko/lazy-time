import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { reducers as alert } from 'utils/alert';
import sources from './sources/reducer';
import trackers from './trackers/reducer';

export default (history) => combineReducers({
    sources,
    trackers,
    router: connectRouter(history),
    form,
    ...alert
});