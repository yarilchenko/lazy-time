import * as action from 'store/trackers/actions';
import URI from 'routes/uris';
import { of } from 'rxjs';
import { apiRequest, REQUEST_ERROR, REQUEST_SUCCESS } from 'utils/api';
import { epicErrorHandler } from 'utils/error-handler';
import { actions as alert } from 'utils/alert';

export const checkTrackerCredentials = ($action) =>
    $action
        .ofType(action.CHECK_CREDENTIALS)
        .switchMap(({ payload }) => {
            const { values, form } = payload;
            form.startSubmit();
            const token = btoa(`${values.login}:${values.password}`),
                meta = {
                    url: `${values.url}${URI.JIRA_TEST_URI}`,
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${token}`
                    }
                };
            return of(apiRequest({ns: 'tracker-check-creds', form}, meta))
        })
        .catch(epicErrorHandler);

export const trackerResponseCheck = ($action) =>
    $action
        .ofType(REQUEST_SUCCESS, REQUEST_ERROR)
        .filter((action) => action.uuid.ns === 'tracker-check-creds')
        .switchMap(({ uuid, payload }) => {
            const { status } = payload,
                { form } = uuid;
            let actions = [];

            form.stopSubmit();

            if (payload.hasOwnProperty('status') && status !== 200) {
                actions.push(
                    alert.error('Oops! Something went wrong, maybe credentials are incorrect'),
                    { type: action.CHECK_CREDENTIALS_ERROR }
                );
            } else {
                actions.push(
                    alert.success('Woohoo! It seems like a correct credentials!'),
                    { type: action.CHECK_CREDENTIALS_SUCCESS }
                );
            }

            return of(...actions);
        })
        .catch(epicErrorHandler);