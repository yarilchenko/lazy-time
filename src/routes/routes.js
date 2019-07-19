const integration = '/integration',
    configuration = '/configuration/:type(tracker|source)/:code',
    routes = {
        integration: {
            list: `${integration}/list`
        },
        configuration: {
            list: configuration,
            method: `${configuration}/:method`
        },
        mapping: '/mapping',
        dashboard: '/dashboard'
    };

export default routes;
