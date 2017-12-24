import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/GridComponent/Grid';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(Grid),
        document.getElementById('application')
    );
});