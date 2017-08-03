import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import promise from 'redux-promise'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Login from './components/login';
import NewIrc from './components/auth/irc/new-irc'



import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider>
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/irc" component={NewIrc}/>
                        <Route path="/" component={Login}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
