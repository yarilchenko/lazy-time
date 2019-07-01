import { AUTHENTICATION_METHODS } from './authMethods';
import rescueTime from 'assets/images/rescuetime-logo.svg';
import Authentication from 'common/utils/Authentication';

const { API_KEY } = AUTHENTICATION_METHODS;

export default [
    {
        title: 'RescueTime',
        description: 'RescueTime | Find your ideal work-life balance',
        code: 'rescue-time',
        logo: rescueTime,
        url: 'https://www.rescuetime.com',
        testURI: '/anapi/data',
        methods: [{
            ...API_KEY,
            configuration: (key) => ({
                queries: {
                    ...Authentication('key').params(key),
                    format: 'json',
                    restrict_begin: '2019-06-30',
                    restrict_end: '2019-06-30'
                }
            })
        }],
    }
]