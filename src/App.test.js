import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider} from "material-ui";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MuiThemeProvider>
            <App style={App}/>
        </MuiThemeProvider>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
