import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NavLink, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import * as RoutesModule from './routes';
let routes = RoutesModule.routes;

function renderApp() {
  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
  const rootElement = document.getElementById('react-app');

  ReactDOM.render(
    <div>
      <h1>Last FM</h1>
      <AppContainer>
        <BrowserRouter children={routes} />
      </AppContainer>
    </div>,
    rootElement);
}

renderApp();


if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require<typeof RoutesModule>('./routes').routes;
    renderApp();
  });
}
