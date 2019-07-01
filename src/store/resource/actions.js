export const namespace = '@RESOURCE',
    SAVE_RESOURCE_CONFIGURATION = `${namespace}/SAVE_CONFIGURATION`,
    TEST_RESOURCE_CONFIGURATION = `${namespace}/TEST_CONFIGURATION`,
    TEST_RESOURCE_SUCCESS = `${namespace}/TEST_SUCCESS`,
    TEST_RESOURCE_FAILED = `${namespace}/TEST_FAILED`,
    TEST_RESOURCE_RESET = `${namespace}/TEST_RESET`;

export const saveResource = (payload) => ({
    type: SAVE_RESOURCE_CONFIGURATION,
    payload
});

export const testResource = (payload) => ({
    type: TEST_RESOURCE_CONFIGURATION,
    payload
});

export const resetTestState = () => ({
    type: TEST_RESOURCE_RESET
});