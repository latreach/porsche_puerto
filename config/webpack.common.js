/**
 * @author: Paul Márquez <mcromanceva@hotmail.com>
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');

/**
 * Webpack Constants
 */
const METADATA = {
  title: 'Presentación Porsche Puerto Vallarta',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

/**
 * Webpack configuration
 */
module.exports = {

  metadata: METADATA,
  entry: {
    'polyfills': './src/polyfills.browser.js',
    'vendor':    './src/vendor.browser.js',
    'main':      './src/main.browser.js'
  },

  resolve: {
    extensions: [ '', '.js', '.css', '.scss' ],
    root: helpers.root('src'),
    modulesDirectories: [ 'node_modules' ],
  },

  module: {

    preLoaders: [
      { test: /\·js$/, loader: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'source-map-loader' }
    ],

    loaders: [
      // { test: /\.json$/, loader: 'json-loader' },
      // { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')] },
      // { test: /\.scss$/, loaders: [ 'raw-loader', 'sass-loader' ] },
      // { test: /initial\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      // { test: /\.woff(2)?(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      // { test: /\.(ttf|eot|svg)(\?v=.+)?$/, loader: 'file-loader' },
      // { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]

  },

  plugins: [
    // new ExtractTextPlugin('initial.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new HtmlWebpackPlugin({ template: 'src/index.html', chunksSortMode: 'dependency' }),
    new HtmlElementsPlugin({ headTags: require('./head-config.common') }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
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
