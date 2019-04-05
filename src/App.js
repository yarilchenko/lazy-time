import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routes as r } from './routes/'
import createReduxStore from './store';
import reducers from './store/createReducer';
import epics from './store/epics';
import IntegrationsList from './views/Integration/List';
import Jira from './views/Integration/Jira/Configuration';
import Redmine from './views/Integration/Redmine/Configuration';
import { Menu } from './components';
import Alert from 'utils/alert';
import './App.scss';
import { JssProvider } from 'react-jss';
import { create as createJss } from 'jss';
import { createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = createJss(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point')

class App extends Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={createReduxStore(reducers, epics)}>
                    <BrowserRouter>
                        <Fragment>
                            <Alert/>
                            <Menu/>
                            <Switch>
                                {/*<PrivateRoute exact path='/' component={TimeLog} />*/}
                                <Route exact path={r.integration.path} component={IntegrationsList}/>
                                <Route exact path={r.integration.jira.path} component={Jira}/>
                                <Route exact path={r.integration.redmine.path} component={Redmine}/>
                            </Switch>
                        </Fragment>
                    </BrowserRouter>
                </Provider>
            </JssProvider>
        );
    }
}

export default App;
