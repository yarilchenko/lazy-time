import * as actions from '../common/actions';
import { of } from 'rxjs/observable/of';
import { push } from 'connected-react-router';
import { routes } from 'routes';
import { epicErrorHandler } from 'utils/error-handler';

export const redirectAfterCredentialsSave = (action$, state$) =>
    action$
        .ofType(actions.REDIRECT_AFTER_SAVE)
        .switchMap(() => {
            const { trackers, sources } = state$.getState();

            console.log(trackers, sources);
            // window.location = '';
        })
        .catch(epicErrorHandler);

export const redirectToResource = (action$) =>
    action$
        .ofType(actions.REDIRECT_TO_RESOURCE)
        .switchMap(({payload: resource}) => {
            const {type, methods, title} = resource,
                methodsCount = methods.length;
            let distRoute;

            if(!methodsCount) {
                distRoute = routes.integration.list;
            } else {
                distRoute = `/${type}/${title}`;

                if(methodsCount === 1) {
                    const method = methods[0];
                    distRoute = `${distRoute}/${method.code}`;
                }
            }

            return of(push(distRoute));
        });