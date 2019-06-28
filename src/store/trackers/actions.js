export const namespace = '@TRACKER',
    SAVE_CONFIGURATION = `${namespace}/SAVE_CONFIGURATION`,
    CHECK_CREDENTIALS = `${namespace}/CHECK_CREDENTIALS`,
    CHECK_CREDENTIALS_SUCCESS = `${namespace}/CHECK_CREDENTIALS_SUCCESS`,
    CHECK_CREDENTIALS_ERROR = `${namespace}/CHECK_CREDENTIALS_ERROR`;

export const saveTracker = ({tracker, configuration}) => ({
    type: SAVE_CONFIGURATION,
    payload: {
        name: tracker,
        configuration
    }
});

export const checkCredentials = (values, form) => ({
    type: CHECK_CREDENTIALS,
    payload: {values, form}
});