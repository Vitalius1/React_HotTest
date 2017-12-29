import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/AppComponent/App';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('application'));

if (module.hot) {
    console.log('hot reloading active');
    module.hot.accept('./components/AppComponent/App', () => {
        console.log('doing hot reload');
        const NextApp = require('./components/AppComponent/App').App; // not working hot reload without this line ???
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('application')
        );
    });
}