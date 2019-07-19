import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import { combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import storage from 'redux-persist/lib/storage';
import api from 'common/utils/api';
import * as sourceActions from './source/actions';
import * as trackerActions from './tracker/actions';
import * as commonActions from './common/actions';
import * as resourceActions from './resource/actions';

export const actions = {
    source: sourceActions,
    tracker: trackerActions,
    common: commonActions,
    resource: resourceActions
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['sources', 'trackers']
};

export const epic$ = new BehaviorSubject(combineEpics(...api));

export default function createReduxStore(reducers, history, preloadedState = {}) {
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;
    /* eslint-enable */

    const persistedReducer = persistReducer(persistConfig, reducers(history));
    const rootEpic = (action$, state$) => epic$.mergeMap(epic => epic(action$, state$));
    const epicMiddleware = createEpicMiddleware(),
        store = createStore(
            persistedReducer,
            preloadedState,
            composeEnhancers(
                applyMiddleware(
                    epicMiddleware,
                    routerMiddleware(history)
                )
            )
        );
    epicMiddleware.run(rootEpic);


    return store;
}


export function postStoreCreate(epics) {
    epic$.next(epics)
}