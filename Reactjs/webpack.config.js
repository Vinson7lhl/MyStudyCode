var webpack = require('webpack');
var path = require('path');
module.exports = {
    // entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/app.js')],
    // output: {
    //   path: path.resolve(__dirname, './build'),
    //   filename: 'bundle.js',
    // },
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};