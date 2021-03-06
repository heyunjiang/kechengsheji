var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'jk');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  entry: {
    jk:  path.resolve(APP_PATH, 'index.js'),
    mycar:  path.resolve(APP_PATH, 'mycar.js'),
    goods:  path.resolve(APP_PATH, 'goods.js'),
    login:  path.resolve(APP_PATH, 'login.js'),
    member:  path.resolve(APP_PATH, 'member.js'),
    register:  path.resolve(APP_PATH, 'register.js'),
    tourist:  path.resolve(APP_PATH, 'tourist.js'),
    userInfo:  path.resolve(APP_PATH, 'userInfo.js'),
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlwebpackPlugin({
      title: '眷客',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['jk'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '购物车',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'mycar.html',
      chunks: ['mycar'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '商品分类',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'goods.html',
      chunks: ['goods'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '登录',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'login.html',
      chunks: ['login'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '会员中心',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'member.html',
      chunks: ['member'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '注册',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'register.html',
      chunks: ['register'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '游客中心',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'tourist.html',
      chunks: ['tourist'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '用户信息',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'userInfo.html',
      chunks: ['userInfo'],
      inject: 'body'
    })
    ]
};