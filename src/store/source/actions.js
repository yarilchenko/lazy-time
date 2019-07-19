export const namespace = '@SOURCE',
    SAVE_CONFIGURATION = `${namespace}/SAVE_CONFIGURATION`;

export const saveConfiguration = (payload) => ({
    type: SAVE_CONFIGURATION,
    payload,
});
