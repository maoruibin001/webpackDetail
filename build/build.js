/**
 * Created by lenovo on 2017/10/26.
 */
const prodConfig = require('./webpack.prod.config');

const webpack = require('webpack');

webpack(prodConfig, function (err, stats) {
  if (err) throw err;
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
});