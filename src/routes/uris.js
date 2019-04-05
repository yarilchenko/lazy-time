import UriTemplate from 'es6-url-template';

const jiraNamespace = `/rest/api/2`;
const JIRA_TEST_URI = `${jiraNamespace}/mypermissions`;
const JIRA_ISSUE_URI = `${jiraNamespace}/issue/{project}-{issue}`;
const JIRA_ISSUE_WORKLOG = `${JIRA_ISSUE_URI}/worklog`;


export default {
    JIRA_TEST_URI,
    JIRA_ISSUE_URI: new UriTemplate(JIRA_ISSUE_URI),
    JIRA_ISSUE_WORKLOG: new UriTemplate(JIRA_ISSUE_WORKLOG)
}