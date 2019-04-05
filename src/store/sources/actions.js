export const NAMESPACE = '@SOURCES',
    SAVE_SOURCE = `${NAMESPACE}/SAVE_TOKEN`,
    saveSource = source => ({ 
        type: SAVE_SOURCE,
        payload: source,
    });