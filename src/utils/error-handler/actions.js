const namespace = 'error-handler';

export const APP_ERROR = `${namespace}/APP_ERROR`;

export const appError = (text) => ({
    type: APP_ERROR,
    payload: text
});
