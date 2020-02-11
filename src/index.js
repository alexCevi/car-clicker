import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/globalStyles';
import theme from '../src/theme/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
    </ThemeProvider>
, document.getElementById('root'));

//WEB APP WILL NOT WORK OFFLINE - .register to cache 
serviceWorker.unregister();
