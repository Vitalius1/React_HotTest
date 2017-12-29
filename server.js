// webpack-dev-middleware
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);
// express
const express = require('express');
const path = require('path');
const app = express();

// making sure we can access the files by typing the names into the browser
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.sendFile(index)
// });

// app.get('/api/hotsauces.json', (req, res) => {
//     res.sendFile(index)
// });

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
    },
    // historyApiFallback: true,
}));


app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
    console.log('To STOP application press CTRL + C');
});