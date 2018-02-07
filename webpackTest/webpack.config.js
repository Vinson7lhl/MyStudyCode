/**
 * 2017-12-20
 * 作者：李宏磊
 * 
 */
var path = require('path');
console.log(__dirname);
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
  publicPath: '/',
  filename: '[name].js',
  chunkFilename: '[id].[hash].js'
  }
};