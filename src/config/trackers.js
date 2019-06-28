import { AUTHENTICATION_METHODS } from './constants';
import jira from 'assets/images/jira-logo.png';
import redmine from 'assets/images/redmine-logo.png';

const { CREDENTIALS, OAUTH, API_KEY } = AUTHENTICATION_METHODS;

export default [
    {
        title: 'JIRA',
        description: 'JIRA server integration',
        logo: jira,
        methods: [CREDENTIALS],
        form: null,
        connect: (form) => {
            console.log(this);
            return this.form = form;
        },
        createToken: (values) => {
            const { login, password } = this.form ? this.form : values;
            this.token = btoa(`${login}:${password}`);
            return this.token;
        },
        headers: () => {
            return {
                'Authorization': `Basic ${this.token}`
            }
        },
        url: (values) => {
            const { url } = this.form ? this.form : values;
            return url;
        }
    },
    {
        title: 'Redmine',
        description: 'Redmine integration',
        logo: redmine,
        methods: [CREDENTIALS, API_KEY]
    }
]