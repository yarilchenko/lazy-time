import { combineEpics } from 'redux-observable';
import * as integration from './integrationService';
import api from 'utils/api';

export default combineEpics(
    ...Object.values(integration),
    ...api
);
