/**
 * Created by lenovo on 2017/10/26.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtraTextWebpackPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
const config = {
  entry: {
    app: [resolve('../src/index.js')],
    vendor: ['vue', 'jquery']
  },
  output: {
    filename: 'js/[name].js',
    path: resolve('../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve('../src')
      },
      {
        test: /\.tpl$/,
        use: 'string-loader',
        include: resolve('../src')
      },
      {
        test: /\.css$/,
        use: ExtraTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers:["ie >= 8",
                    "Firefox >= 20",
                    "Android > 4.4"]
                }),
              ]
            }
          }]
        }),
        include: resolve('../src')
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../index.html'),
      name: 'index2.html',
      inject: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),

   new ExtraTextWebpackPlugin({
     filename: 'css/[name].css'
   }),
   new webpack.optimize.CommonsChunkPlugin({
     name: 'vendor',
   }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    // new Uglify()
  ]
}

module.exports = config;