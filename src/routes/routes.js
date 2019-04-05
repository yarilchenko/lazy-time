const integration = '/integration';
const tracker = '/tracker';
const routes = {
    integration: {
        path: `${integration}/list`,
        jira: {
            path: `${integration}/jira`
        },
        redmine: {
            path: `${integration}/redmine`
        }
    },
    tracker: {
        path: tracker
    }
};
export default routes;