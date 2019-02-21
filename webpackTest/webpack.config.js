/**
 * 2017-12-20
 * 作者：李宏磊
 * 
 */
var path = require('path');
console.log(__dirname);
module.exports = {
  // 入口
  entry: './app/index.js',
  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app/index.js',
    chunkFilename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      }
    ]
  }
};