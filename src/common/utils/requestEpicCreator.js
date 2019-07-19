import shortid from 'shortid';
import { of } from 'rxjs/observable/of';
import { apiRequest, REQUEST_SUCCESS } from 'common/utils/api';
import { epic$ } from 'store';

/**
 * Helper for epics that using only to make requests
 * and store it in redux
 * @param {string} trigger
 * @param {string} successAction
 * @param {object} endpoint
 * @param {function} [reselector]
 * @param {string} [requestId] Use if need to catch request somewhere else
 */
const requestEpicCreator = (trigger, successAction, endpoint, reselector, requestId) => {
    const id = requestId || shortid.generate(),
        requestEpic = (action$) =>
            action$
                .ofType(trigger)
                .switchMap(({payload = {}}) => of(
                    apiRequest(
                        id,
                        { ...endpoint, ...payload.meta },
                        payload.body
                    )
                )),
        successEpic = (action$) =>
            action$
                .ofType(REQUEST_SUCCESS)
                .filter((action) => action.uuid === id)
                .switchMap(({ payload }) => of({
                    type: successAction,
                    payload: reselector ? reselector(payload) : payload
                }));

    epic$.next(requestEpic);
    epic$.next(successEpic);

};

export default requestEpicCreator;
