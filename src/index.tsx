///<reference types="webpack-env" />

import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'typeface-roboto';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.scss';

import { App } from './components/app/app.component';


const render = (Component: typeof React.Component) => {
  ReactDOM.render(
    <MuiThemeProvider>
      <Component />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app/app.component', () => { render(App) })
}
