import { AUTHENTICATION_METHODS } from './authMethods';
import jira from 'assets/images/jira-logo.png';
import redmine from 'assets/images/redmine-logo.png';
import Authentication from 'common/utils/Authentication';

const { BASIC, API_KEY } = AUTHENTICATION_METHODS;

export default [
    {
        title: 'JIRA',
        description: 'JIRA server integration',
        code: 'jira',
        logo: jira,
        testURI: '/rest/api/2/mypermissions',
        methods: [{
            ...BASIC,
            configuration: ({ login, password }) => ({
                headers: {
                    ...Authentication('Authorization')
                        .basic(login, password)
                }
            })
        }],
    },
    {
        title: 'Redmine',
        description: 'Redmine integration',
        code: 'redmine',
        logo: redmine,
        methods: [BASIC, API_KEY]
    }
]