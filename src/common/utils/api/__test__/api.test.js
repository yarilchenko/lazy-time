import { ajax } from 'rxjs/observable/dom/ajax';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import * as epics from '../epics';
import * as a from '../actions';

jest.mock('rxjs/observable/dom/ajax');

describe('Api module. ', () => {

    beforeAll(() => {
        ajax.mockImplementation((request) => {
            if (request.method === 'DELETE') {
                return _throw({
                    status: 401,
                    message: 'error'
                });
            }
            return of({ response: {} });
        });
    });

    function getActionStream(action) {
        const action$ = of(action);
        action$.ofType = () => action$;
        return action$;
    };

    it('Multiple Request should return payload with appropriate number of responses', () => {
        const request1 = {
            id: 1,
            meta: { url: 'url1', method: 'GET' },
            body: { field: 123 }
        };

        const request2 = {
            id: 2,
            meta: { url: 'url3', method: 'POST' },
            body: { field: 12345 }
        };

        const action$ = getActionStream(a.apiMultipleRequest('uuid', [request1, request2]));
        epics.apiMultiple(action$).subscribe(
            response => expect(response).toEqual({
                type: a.REQUEST_SUCCESS,
                payload: [{ id: 1, response: {} }, { id: 2, response: {} }],
                uuid: 'uuid'
            })
        );
    });

    it('Multiple Request should return error response', () => {
        const request1 = {
            id: 1,
            meta: { url: 'url1', method: 'DELETE' },
            body: { field: 123 }
        };

        const request2 = {
            id: 2,
            meta: { url: 'url3', method: 'POST' },
            body: { field: 12345 }
        };

        const action$ = getActionStream(a.apiMultipleRequest('uuid', [request1, request2]));
        epics.apiMultiple(action$).subscribe(response => expect(response).toEqual({
            type: a.REQUEST_ERROR,
            payload: { message: 'error', status: 401, response: undefined },
            uuid: 'uuid',
            id: 1
        }));
    });
});
