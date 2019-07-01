import * as actions from '../common/actions';
import { of } from 'rxjs/observable/of';
import { push } from 'connected-react-router';
import { routes } from 'routes';
import { epicErrorHandler } from 'common/utils/error-handler';
import pathToRegexp from 'path-to-regexp';

export const redirectAfterConfigurationSave = (action$, state$) =>
    action$
        .ofType(actions.REDIRECT_AFTER_SAVE)
        .switchMap(() => {
            console.log(state$);
            const { trackers, sources } = state$.value;

            const trackersCount = Object.keys(trackers).length,
                sourcesCount = Object.keys(sources).length,
                path = trackersCount && sourcesCount
                    ? routes.dashboard
                    : routes.integration.list;

            return of(push(path));
        })
        .catch(epicErrorHandler);

export const redirectToResource = (action$) =>
    action$
        .ofType(actions.REDIRECT_TO_RESOURCE)
        .switchMap(({ payload: resource }) => {
            const { type, methods, code } = resource,
                methodsCount = methods.length;
            let route = methodsCount && methodsCount > 1
                ? routes.configuration.list
                : routes.configuration.method;

            const url = pathToRegexp.compile(route);

            return of(
                push(
                    url({
                        code,
                        type,
                        method: methodsCount ? methods[0].code : null
                    })
                )
            );
        })
        .catch(epicErrorHandler);