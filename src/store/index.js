import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

export default function createReduxStore(reducers, epics, preloadedState = {}) {
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;
    /* eslint-enable */

    const epicMiddleware = createEpicMiddleware(),
        store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(epicMiddleware)));

    epicMiddleware.run(epics);
    return store;
}
