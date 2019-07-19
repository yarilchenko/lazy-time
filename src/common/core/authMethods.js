import CredentialsForm from 'views/Configuration/Basic';
import OAuthForm from 'views/Configuration/OAuth';
import ApiKeyForm from 'views/Configuration/ApiKey';
import IconCode from '@material-ui/icons/Code';
import IconPermIdentity from '@material-ui/icons/PermIdentity';
import IconVerifiedUser from '@material-ui/icons/VerifiedUser';
import Authentication from 'common/utils/Authentication';


export const oAuth = new Authentication({
    code: 'oauth',
    title: 'oAuth',
    icon: IconVerifiedUser,
    component: OAuthForm
});

export const Basic = new Authentication({
    code: 'basic',
    title: 'Basic Authentication',
    icon: IconPermIdentity,
    component: CredentialsForm
});

export const ApiKey = new Authentication({
    code: 'api-key',
    title: 'API Key',
    icon: IconCode,
    component: ApiKeyForm
});