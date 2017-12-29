const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: "inline-source-map",
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-hot-loader/babel']
                    }
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};