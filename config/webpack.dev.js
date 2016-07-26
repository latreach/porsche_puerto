/**
 * @author: Paul Márquez <mcromanceva@hotmail.com>
 */
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const METADATA = webpackMerge(commonConfig.metadata, {
  host: 'localhost',
  port: 3000,
  ENV: ENV,
});

module.exports = webpackMerge(commonConfig, {

  metadata: METADATA,
  debug: true,
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'ac_[name]',
    libraryTarget: 'var',
  },

  plugins: [

    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
      }
    }),
  ],

  /**
   * Static analysis linter for TypeScript advanced options configuration
   * Description: An extensible linter for the TypeScript language.
   * See: https://github.com/wbuchwalter/tslint-loader
   */
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  /**
   * Webpack Development Server configuration
   * Description: The webpack-dev-server is a little node.js Express server.
   * The server emits information about the compilation state to the client,
   * which reacts to those events.
   *
   * See: https://webpack.github.io/docs/webpack-dev-server.html
   */
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helpers.root('dist')
  },

  eslint: {
    emitError: true,
    emitWarning: true,
    failOnWarning: false,
    failOnError: true
  }
  /*
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

});

