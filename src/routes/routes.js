const integration = '/integration';
const configuration = '/:type(tracker|source)/:title';
const tracker = '/tracker';
const routes = {
    integration: {
        list: `${integration}/list`
    },
    configuration: {
        list: configuration,
        method: `${configuration}/:method`
    },
    dashboard: tracker
};
export default routes;