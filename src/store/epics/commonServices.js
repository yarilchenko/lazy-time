import * as actions from '../actions/common';
import { of } from 'rxjs/observable/of';
import { epicErrorHandler } from 'utils/error-handler';

export const redirectAfterCredentialsSave = ($action) =>
    $action
        .ofType(actions.REDIRECT_AFTER_SAVE)
        .switchMap(() => {
            window.location = '';
        })
        .catch(epicErrorHandler);