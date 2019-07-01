import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { reducer as alert } from 'common/utils/alert';
import sources from './source/reducer';
import trackers from './tracker/reducer';
import resource from './resource/reducer';

export default (history) => combineReducers({
    sources,
    trackers,
    resource,
    router: connectRouter(history),
    form,
    ...alert
});