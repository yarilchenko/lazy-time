import Credentials from 'views/Integration/Configuration/Form/Credentials';
import OAuth from 'views/Integration/Configuration/Form/OAuth';
import ApiKey from 'views/Integration/Configuration/Form/ApiKey';
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
    CREDENTIALS: {
        code: 'credentials',
        title: 'Credentials',
        icon: IconPermIdentity,
        component: Credentials
    },
    API_KEY: {
        code: 'api_key',
        title: 'API Key',
        icon: IconCode,
        component: ApiKey
    }
};