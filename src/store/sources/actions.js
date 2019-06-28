export const NAMESPACE = '@SOURCE',
    SAVE_CONFIGURATION = `${NAMESPACE}/SAVE_CONFIGURATION`,
    saveSource = ({source, configuration}) => ({
        type: SAVE_CONFIGURATION,
        payload: {
            name: source,
            configuration
        },
    });
