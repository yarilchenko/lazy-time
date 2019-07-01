const namespace = 'alert';

export const SET_ALERT = `${namespace}/SET_ALERT`;

export const error = (text) => ({
    type: SET_ALERT,
    payload: { text, type: 'error' }
});

export const success = (text) => ({
    type: SET_ALERT,
    payload: { text, type: 'success' }
});

export const info = (text) => ({
    type: SET_ALERT,
    payload: { text, type: 'info' }
});
