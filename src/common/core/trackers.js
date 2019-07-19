import { Basic, ApiKey } from './authMethods';
import jira from 'assets/images/jira-logo.png';
import redmine from 'assets/images/redmine-logo.png';

export default [
    {
        title: 'JIRA',
        description: 'JIRA server integration',
        code: 'jira',
        logo: jira,
        testURI: '/rest/api/2/mypermissions',
        methods: [
            Basic({
                via: ['basic'],
                key: 'Authorization'
            })
        ],
    },
    {
        title: 'Redmine',
        description: 'Redmine integration',
        code: 'redmine',
        logo: redmine,
        methods: [
            Basic({
                via: ['basic'],
                key: 'Authorization'
            }),
            ApiKey({
                via: ['headers'],
                key: 'X-Redmine-API-Key'
            })
        ]
    }
]