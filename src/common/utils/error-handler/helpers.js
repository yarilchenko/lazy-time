import { of } from 'rxjs/observable/of';
import * as a from './actions';

export const logError = (error) => {
    if (process.env.NODE_ENV === 'development') {
        console.log('error log', error);
    }
};

export const epicErrorHandler = (error) => {
    logError(error);
    return of(a.appError(error));
};
