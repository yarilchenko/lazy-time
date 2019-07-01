export const NAMESPACE = '@SOURCE',
    SAVE_CONFIGURATION = `${NAMESPACE}/SAVE_CONFIGURATION`;

export const saveConfiguration = (payload) => ({
    type: SAVE_CONFIGURATION,
    payload,
});
