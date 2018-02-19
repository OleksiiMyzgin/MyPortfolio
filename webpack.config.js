const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const jses6 = require('./webpack/jses6');
const devserver = require('./webpack/devserver');
const styl = require('./webpack/styl');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'client'),
    build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      'index': PATHS.source + '/index.js',
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          chunks: ['index', 'common'],
          template: './index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'common'
      }),
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
      })
    ]
  },
  jses6(),
  fonts(),
  images()
]);

module.exports = function(env) {
  if (env === 'production'){
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
  if (env === 'development'){
    return merge([
      common,
      styl(),
      devserver(),
    ])
  }
};
