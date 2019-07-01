import { actions } from 'store';
import { of } from 'rxjs/observable/of';
import {
    apiRequest,
    REQUEST_SUCCESS,
    REQUEST_ERROR
} from 'common/utils/api';
import { epicErrorHandler } from 'common/utils/error-handler';

export const saveResource = (action$) =>
    action$
        .ofType(actions.resource.SAVE_RESOURCE_CONFIGURATION)
        .switchMap(({ payload }) => {
            const { type, ...resource } = payload;
            return of(
                actions[type].saveConfiguration(resource),
                actions.resource.resetTestState(),
                actions.common.redirectAfterConfigurationSave()
            )
        })
        .catch(epicErrorHandler);

export const testResource = (action$) =>
    action$
        .ofType(actions.resource.TEST_RESOURCE_CONFIGURATION)
        .switchMap(({ payload }) => {
            const { url, testURI, headers = {}, queries = {} } = payload;

            console.log(headers, queries);

            return of(
                apiRequest(
                    'test-resource-configuration',
                    {
                        url: `${url}${testURI}`,
                        method: 'GET',
                        headers
                    },
                    queries
                )
            )
        })
        .catch(epicErrorHandler);

export const testResourceSuccess = (action$) =>
    action$
        .ofType(REQUEST_SUCCESS)
        .switchMap(() =>
            of({
                type: actions.resource.TEST_RESOURCE_SUCCESS
            })
        )
        .catch(epicErrorHandler);

export const testResourceFailed = (action$) =>
    action$
        .ofType(REQUEST_ERROR)
        .switchMap(() =>
            of({
                type: actions.resource.TEST_RESOURCE_FAILED
            })
        )
        .catch(epicErrorHandler);
