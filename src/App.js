import React, { Component, Fragment } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { StylesProvider } from '@material-ui/styles';
import createBrowserHistory from 'history/createBrowserHistory';
import { routes as r } from 'routes';
import createReduxStore from './store';
import reducers from './store/createReducer';
import epics from './store/epics';
import IntegrationsList from './views/Integration/List';
import ConfigurationList from 'views/Integration/Configuration/List';
import ResourceConfiguration from 'views/Resource/Configuration';
import { Menu } from './common/components';
import Alert from 'common/utils/alert';
import './App.scss';

const history = createBrowserHistory(),
    store = createReduxStore(reducers, epics, history),
    persistor = persistStore(store);

class App extends Component {
    render() {
        return (
            <StylesProvider injectFirst>
                <Provider store={store} context={ReactReduxContext}>
                    <PersistGate persistor={persistor} loading={null}>
                        <ConnectedRouter history={history} context={ReactReduxContext}>
                            <Fragment>
                                <Alert/>
                                <Menu/>
                                <>
                                    <Route exact path={r.integration.list} component={IntegrationsList}/>
                                    <Route exact path={r.configuration.list} component={ConfigurationList}/>
                                    <Route exact path={r.configuration.method} component={ResourceConfiguration}/>
                                </>
                            </Fragment>
                        </ConnectedRouter>
                    </PersistGate>
                </Provider>
            </StylesProvider>
        );
    }
}

export default App;
