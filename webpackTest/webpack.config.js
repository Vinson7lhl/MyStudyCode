/**
 * 2017-12-20
 * 作者：李宏磊
 * 
 */
var path = require('path');
console.log(__dirname);
module.exports = {
  // 入口(单个入口写法)，但不推荐此写法
  entry: './app/index.js',
  /**
   * 
   * 入口(多个入口写法)，推荐此写法
    entry: ['入口1','入口2'],
    entry: {
      app: './src/app.js',
      vendors: './src/vendors.js'
    },
   */
  // 出口
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app/index.js',
    chunkFilename: 'bundle.js'
  },
  // loader配置
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
  },
  // plugin配置
  plugin: []
};