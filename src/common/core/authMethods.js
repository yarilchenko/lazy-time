import Credentials from 'views/Configuration/Basic';
import OAuth from 'views/Configuration/OAuth';
import ApiKey from 'views/Configuration/ApiKey';
import IconCode from '@material-ui/icons/Code';
import IconPermIdentity from '@material-ui/icons/PermIdentity';
import IconVerifiedUser from '@material-ui/icons/VerifiedUser';

export const AUTHENTICATION_METHODS = {
    OAUTH: {
        code: 'oauth',
        title: 'oAuth',
        icon: IconVerifiedUser,
        component: OAuth
    },
    BASIC: {
        code: 'basic',
        title: 'Basic Authentication',
        icon: IconPermIdentity,
        component: Credentials
    },
    API_KEY: {
        code: 'api-key',
        title: 'API Key',
        icon: IconCode,
        component: ApiKey
    }
};