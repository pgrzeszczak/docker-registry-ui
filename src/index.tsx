import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'typeface-roboto';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.scss';

import { App } from './components/app/app.component';

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
