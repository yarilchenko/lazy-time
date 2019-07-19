import { actions } from 'store';
import { of } from 'rxjs/observable/of';
import {
    apiRequest,
    REQUEST_SUCCESS,
    REQUEST_ERROR
} from 'common/utils/api';
import { epicErrorHandler } from 'common/utils/error-handler';
import { startSubmit, stopSubmit } from 'redux-form';

export const saveResource = (action$) =>
    action$
        .ofType(actions.resource.SAVE_CONFIGURATION)
        .switchMap(({ payload }) => {
            const { resource: { type, ...resource }, settings } = payload;

            const configuration = {
                ...settings,
                code: resource.code
            };

            return of(
                actions[type].saveConfiguration(configuration),
                actions.resource.resetTestState(),
                actions.common.redirectAfterConfigurationSave()
            )
        })
        .catch(epicErrorHandler);

const TEST_RESOURCE_ID = 'test-resource-configuration';

export const testResource = (action$) =>
    action$
        .ofType(actions.resource.TEST_CONFIGURATION)
        .switchMap(({ payload }) => {
            console.log(payload);
            const {
                resource: {
                    testURI
                },
                settings: {
                    url,
                    headers,
                    params
                },
                form
            } = payload;

            console.log(url, headers, params);

            return of(
                apiRequest(
                    {
                        id: TEST_RESOURCE_ID,
                        form
                    },
                    {
                        url: `${url}${testURI}`,
                        method: 'GET',
                        headers
                    },
                    params
                ),
                startSubmit(form)
            )
        })
        .catch(epicErrorHandler);

export const testResourceSuccess = (action$) =>
    action$
        .ofType(REQUEST_SUCCESS)
        .filter((action) => action.uuid.id === TEST_RESOURCE_ID)
        .switchMap(({ uuid }) =>
            of(
                { type: actions.resource.TEST_SUCCESS },
                stopSubmit(uuid.form)
            )
        )
        .catch(epicErrorHandler);

export const testResourceFailed = (action$) =>
    action$
        .ofType(REQUEST_ERROR)
        .filter((action) => action.uuid.id === TEST_RESOURCE_ID)
        .switchMap(({ uuid }) =>
            of(
                { type: actions.resource.TEST_FAILED },
                stopSubmit(uuid.form)
            )
        )
        .catch(epicErrorHandler);
