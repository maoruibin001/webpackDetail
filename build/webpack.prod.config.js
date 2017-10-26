/**
 * Created by lenovo on 2017/10/26.
 */
const webpackBaseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const Uglify = require('uglifyjs-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const config = webpackMerge(webpackBaseConfig, {
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: resolve('../dist')
  },
  plugins: [
    new Uglify()
  ]
});
module.exports = config;