/**
 * Created by lenovo on 2017/10/26.
 */
const webpackDevConfig = require('./webpack.dev.config');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const app = express();

const compiler = webpack(webpackDevConfig);


const devMiddleware = webpackDevMiddleware(compiler, {
  quiet: true
});

const hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
});

app.use(hotMiddleware);

app.use(devMiddleware);


app.listen(3001, function () {
  console.log('server start at:localhost:3001');
});