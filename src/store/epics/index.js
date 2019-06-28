import { combineEpics } from 'redux-observable';
import * as tracker from './trackerService';
import * as common from './commonServices';
import api from 'utils/api';

export default combineEpics(
    ...Object.values(tracker),
    ...Object.values(common),
    ...api
);
