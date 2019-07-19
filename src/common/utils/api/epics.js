import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { of } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as a from './actions';
import { epicErrorHandler } from 'common/utils/error-handler/index';
import isEmpty from 'lodash-es/isEmpty';
import { buildQueryParams } from './helper';

const ajaxCall = ({ uuid, payload }) => {
    const { headers, ...meta } = payload.meta;
    const query = meta.method === 'GET' && !isEmpty(payload.body) ? `?${buildQueryParams(payload.body)}` : '';
    const settings = {
        ...meta,
        // withCredentials: true,
        crossDomain: true,
        createXHR: function () {
            return new XMLHttpRequest();
        },
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        url: `${meta.url}${query}`
    };

    if (payload.body) {
        settings.body = JSON.stringify(payload.body);
    }
    return ajax(settings)
        .map((data) => ({
            type: a.REQUEST_SUCCESS,
            payload: data.response,
            uuid
        }))
        .catch((ajaxError) =>
            of({
                type: a.REQUEST_ERROR,
                payload: {
                    message: ajaxError.message,
                    status: ajaxError.status,
                    response: ajaxError.response
                },
                uuid
            })
        );
};

export const apiSwitch = (action$) =>
    action$
        .ofType(a.REQUEST)
        .filter((action) => action.payload.meta.method === 'GET')
        .switchMap(ajaxCall)
        .catch(epicErrorHandler);

export const apiMerge = (action$) =>
    action$
        .ofType(a.REQUEST)
        .filter((action) => action.payload.meta.method !== 'GET')
        .mergeMap(ajaxCall)
        .catch(epicErrorHandler);

export const apiMultiple = (action$) =>
    action$
        .ofType(a.REQUEST_MULTIPLE)
        .switchMap(({ uuid, payload }) => {
            return forkJoin(...payload.map(request => ajaxCall({ uuid: request.id, payload: request })))
                .map(
                    (responses) => {
                        const errorResponse = responses.find(({ type }) => type === a.REQUEST_ERROR);
                        if (errorResponse) {
                            errorResponse.id = errorResponse.uuid;
                            errorResponse.uuid = uuid;
                            return errorResponse;
                        }

                        return {
                            type: a.REQUEST_SUCCESS,
                            payload: responses.map(({ uuid: id, payload: response }) => ({ id, response })),
                            uuid
                        };
                    }
                );
        })
        .catch(epicErrorHandler);