import { combineEpics } from 'redux-observable';
import * as tracker from './trackerService';
import * as common from './commonServices';
import * as resource from './resourceService';

export default combineEpics(
    ...Object.values(tracker),
    ...Object.values(common),
    ...Object.values(resource),
);
