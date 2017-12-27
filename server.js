const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
    console.log('To STOP application press CTRL + C');
});