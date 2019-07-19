export const namespace = '@RESOURCE',
    SAVE_CONFIGURATION = `${namespace}/SAVE_CONFIGURATION`,
    TEST_CONFIGURATION = `${namespace}/TEST_CONFIGURATION`,
    TEST_SUCCESS = `${namespace}/TEST_SUCCESS`,
    TEST_FAILED = `${namespace}/TEST_FAILED`,
    TEST_RESET = `${namespace}/TEST_RESET`;

export const saveResource = (payload) => ({
    type: SAVE_CONFIGURATION,
    payload
});

export const testResource = (payload) => ({
    type: TEST_CONFIGURATION,
    payload
});

export const resetTestState = () => ({
    type: TEST_RESET
});