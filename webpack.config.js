const path = require('path');

module.exports = {
    devtool: "inline-source-map",
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
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
};