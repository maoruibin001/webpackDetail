/**
 * Created by lenovo on 2017/10/26.
 */
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');


Object.keys(webpackBaseConfig.entry).forEach(function (name) {
  if (name !== 'vonder') {
    webpackBaseConfig.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(webpackBaseConfig.entry[name])
  }
});


console.log(webpackBaseConfig.entry);


const config = webpackMerge(webpackBaseConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
module.exports = config;