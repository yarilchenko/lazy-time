import React, { Component, Fragment } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';
import { JssProvider } from 'react-jss';
import { create as createJss } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { routes as r } from './routes/'
import createReduxStore from './store';
import reducers from './store/createReducer';
import epics from './store/epics';
import IntegrationsList from './views/Integration/List';
import ConfigurationList from 'views/Integration/Configuration/List';
import ConfigurationItem from 'views/Integration/Configuration/Item';
import { Menu } from './components';
import Alert from 'utils/alert';
import './App.scss';

const generateClassName = createGenerateClassName(),
    jss = createJss(jssPreset()),
    history = createBrowserHistory();
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const store = createReduxStore(reducers, epics, history),
    persistor = persistStore(store);

class App extends Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store} context={ReactReduxContext}>
                    <PersistGate persistor={persistor} loading={null}>
                        <ConnectedRouter history={history} context={ReactReduxContext}>
                            <Fragment>
                                <Alert/>
                                <Menu/>
                                <Switch>
                                    <Route exact path={r.integration.list} component={IntegrationsList}/>
                                    <Route exect path={r.configuration.method} component={ConfigurationItem}/>
                                    <Route exect path={r.configuration.list} component={ConfigurationList}/>
                                    {/*<Route exact path={r.integration.redmine.path} component={Redmine}/>*/}
                                </Switch>
                            </Fragment>
                        </ConnectedRouter>
                    </PersistGate>
                </Provider>
            </JssProvider>
        );
    }
}

export default App;
