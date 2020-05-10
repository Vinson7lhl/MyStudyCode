// 或者利用es6的解构
// const { resolve } = require('path');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    // path.resolve(__dirname 得到的就是根目录 webpackTest这个路径
    path: path.resolve(__dirname, 'dist')
  },
  // loader
  module: {
    rules: [
      // loader详细
      {
        test: /\.scss$/,
        // use中的执行顺序从右到左，从上到下
        use: [
          // 在html中生成style标签，将js中的style插入到html中
          'style-loader',
          // 将css导入到js中可识别的模块
          'css-loader',
          // 将sass转换为css
          'sass-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细的plugins的配置
  ],
  // 模式 development || production
  mode: 'development'
};
