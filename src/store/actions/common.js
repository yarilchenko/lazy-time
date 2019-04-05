export const namespace = '@APP',
    REDIRECT_AFTER_SAVE = `${namespace}/REDIRECT_AFTER_SAVE`;

export const redirectAfterCredentialSave = () => ({
    type: REDIRECT_AFTER_SAVE
});