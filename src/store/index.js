import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as sourceActions from './sources/actions';
import * as trackerActions from './trackers/actions';
import * as commonActions from './common/actions';

export const actions = {
    source: sourceActions,
    tracker: trackerActions,
    common: commonActions
};

const persistConfig = {
    key: 'root',
    storage,
};


export default function createReduxStore(reducers, epics, history, preloadedState = {}) {
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;
    /* eslint-enable */

    const persistedReducer = persistReducer(persistConfig, reducers(history));

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

    epicMiddleware.run(epics);
    return store;
}
