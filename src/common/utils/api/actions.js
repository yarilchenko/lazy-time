const namespace = 'api';
export const REQUEST = `${namespace}/REQUEST`;
export const REQUEST_MULTIPLE = `${namespace}/REQUEST_MULTIPLE`;
export const REQUEST_SUCCESS = `${namespace}/REQUEST_SUCCESS`;
export const REQUEST_ERROR = `${namespace}/REQUEST_ERROR`;

/**
 * @param  {*} uuid request identificator, will be returned in REQUEST_SUCCESS/REQUEST_ERROR events
 * @param  {object} meta https://github.com/Reactive-Extensions/RxJS-DOM/blob/v5.0.5/doc/operators/ajax.md
 * @param  {any} [body]  data to send to the server see meta.body
 */
export const apiRequest = (uuid, meta, body) => {
    return {
        type: REQUEST,
        payload: { meta, body },
        uuid
    };
};

/**
 * execute several api requests and return only one response event
 * in case of all the responses are success - {type: REQUEST_SUCCESS, payload: [{id, response}, {id, response} ...], uuid}
 * in case of one or more are failed - returns only event with one failed reponse {type: REQUEST_ERROR, payload: {status: httpStatus, message: errorMessage, reponse}, uuid, id}
 * @param  {any} uuid request identificator, will be returned in REQUEST_SUCCESS/REQUEST_ERROR events
 * @param {array} requests list of objects {id, meta, body}
 */
export const apiMultipleRequest = (uuid, requests) => {
    return {
        type: REQUEST_MULTIPLE,
        payload: requests,
        uuid
    };
};
