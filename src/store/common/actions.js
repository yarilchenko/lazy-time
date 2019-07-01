/**
 * @author Artem Yarylchenko <a.yarilchenko@gmail.com>
 */

export const namespace = '@APP',
    REDIRECT_AFTER_SAVE = `${namespace}/REDIRECT_AFTER_SAVE`,
    REDIRECT_TO_RESOURCE = `${namespace}/REDIRECT_TO_RESOURCE`;

export const redirectAfterConfigurationSave = () => ({
    type: REDIRECT_AFTER_SAVE
});


/**
 * Action to initialize redirection on Selecting integration method screen
 * @param {object} resource - The object with info about resource that needs to be configured
 * @param {string} resource.title - Title of resource
 * @param {string} resource.type - The type of resource
 * @param {array} resource.methods - Methods that can be configured
 *
 * @returns {{type: string}}
 */
export const selectIntegrationResource = (resource) => ({
    type: REDIRECT_TO_RESOURCE,
    payload: resource
});