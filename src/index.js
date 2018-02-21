import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider} from "material-ui";

ReactDOM.render(
    <MuiThemeProvider>
        <App style={App}/>
    </MuiThemeProvider>,

    document.getElementById('root')
);
