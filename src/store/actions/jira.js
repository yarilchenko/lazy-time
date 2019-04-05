export const namespace = '@JIRA',
    CHECK_CREDENTIALS = `${namespace}/CHECK_CREDENTIALS`,
    CHECK_CREDENTIALS_ERROR = `${namespace}/CHECK_CREDENTIALS_ERROR`,
    CHECK_CREDENTIALS_SUCCESS = `${namespace}/CHECK_CREDENTIALS_SUCCESS`,
    SAVE_CREDENTIALS = `${namespace}/SAVE_CREDENTIALS`;


export const checkCredentials = (values, form) => ({
    type: CHECK_CREDENTIALS,
    payload: {
        values,
        form
    }
});

export const saveCredentials = (values, form) => ({
    type: SAVE_CREDENTIALS,
    payload: {
        values,
        form
    }
});