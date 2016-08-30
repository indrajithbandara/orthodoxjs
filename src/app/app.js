import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, Router } from 'react-router'
import { routes } from './routes';
import { Provider } from 'mobx-react';
import AuthStore from './stores/authStore';
import SignupStore from './stores/signupStore';
import Items from './stores/items';
import TokenStore from './stores/TokenStore';

// Needed for onTouchTap, see http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider {...{AuthStore, Items, SignupStore, TokenStore}}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
    document.getElementById('app')
);
