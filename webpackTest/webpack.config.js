// 或者利用es6的解构
// const { resolve } = require('path');
let path = require('path');
// 压缩打包html文件
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 处理css中的图片url,需要两个包，url-loader（和file-loader很相似，但可以返回一个当小于某个大小的文件时的data64格式的字符串），file-loader




/**
 *    
 *  npm安装模块

    【npm install xxx】利用 npm 安装xxx模块到当前命令行所在目录；
    【npm install -g xxx】利用npm安装全局模块xxx；

    本地安装时将模块写入package.json中：

    【npm install xxx】安装但不写入package.json；
    【npm install xxx –save】 安装并写入package.json的”dependencies”中；
    【npm install xxx –save-dev】安装并写入package.json的”devDependencies”中。

    npm 删除模块

    【npm uninstall xxx】删除xxx模块； 
    【npm uninstall -g xxx】删除全局模块xxx；
 */
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
        // use中的数组中的执行顺序从右到左，即'sass-loader'=>'css-loader'=>'style-loader',
        use: [
          // 将js中的style插入到html中,在html中生成style标签
          'style-loader',
          // 将css导入到js中可识别的模块
          'css-loader',
          // 将sass转换为css
          'sass-loader'
        ]
      },
      {
        // 处理css文件中通过url引入的图片文件
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options:{
          limit: 8*1024
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  // plugins的配置
  plugins: [
    // html-webpack-plugin配置
    new HtmlWebpackPlugin(
      {
        template: './src/pages/index.html'
      }
    )
  ],
  // 模式 development || production
  mode: 'development'
};
