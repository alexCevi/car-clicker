import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './App';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/globalStyles';
import theme from '../src/theme/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
    </ThemeProvider>
, document.getElementById('root'));
