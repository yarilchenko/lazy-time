import { ApiKey } from './authMethods';
import rescueTime from 'assets/images/rescuetime-logo.svg';

export default [
    {
        title: 'RescueTime',
        description: 'RescueTime | Find your ideal work-life balance',
        code: 'rescue-time',
        logo: rescueTime,
        /**
         * FIX: adding CORS headers for rescuetime response
         */
        url: 'https://cors-anywhere.herokuapp.com/https://www.rescuetime.com',
        testURI: '/anapi/data',
        methods: [
            ApiKey({
                headers: {
                    /**
                     * FIX: remove preflight request (OPTION)
                     * because rescuetime, doesn't support it
                     * and return 404 HTTP error for it
                     */
                    'Content-Type': 'text/plain'
                },
                params: {
                    format: 'json'
                },
                via: ['params'],
                key: 'key'
            }),
        ],
    }
]