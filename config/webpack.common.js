/**
 * @author: Paul Márquez <mcromanceva@hotmail.com>
 */
const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');

const METADATA = {
  title: 'Presentación Porsche Puerto Vallarta',
  baseUrl: '/'
};

module.exports = {

  metadata: METADATA,
  entry: {
    'vendor':    './src/vendor.browser.js',
    'main':      './src/main.browser.js'
  },

  resolve: {
    extensions: ['', '.html', '.js', '.css', '.scss', 'json'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules']
  },

  module: {

    preLoaders: [
      {test: /\·js$/, loader: 'eslint-loader', exclude: /node_modules/},
      {test: /\.js$/, loader: 'source-map-loader'}
    ],

    loaders: [
      {
        test: /\.html$/,
        loader: 'raw'
        // exclude: [ helpers.root('src/index.html') ]
      },
      {
        test: /\.scss$/,
        loaders: ['raw', 'sass']
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=.+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=.+)?$/,
        loader: 'file-loader'
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        loader: 'imports?jQuery=jquery'
      },
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.csv$/, loader: 'dsv-loader'},
      {test: /\.css$/, loader: 'raw-loader'},
      {
        test: /initial\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('initial.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
      cache: false
    }),
    new HtmlElementsPlugin({headTags: require('./head-config.common')}),
    /*
     * new webpack.optimize.CommonsChunkPlugin({
     *   name: ['polyfills', 'vendor'].reverse()
     * }),
     */
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'Tether': 'tether',
      'window.Tether': 'tether',
      d3: 'd3'
    })
  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
