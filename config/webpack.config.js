/**
 * Configuración general para proyectos frontend sencillos con Webpack
 *
 * @author: Paul Márquez <mcromanceva@hotmail.com>
 *
 */
const webpack = require('webpack');
// const helpers = require('helpers');

/**
 * Webpack Plugins
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');

/**
 * Webpack constants
 */
const METADATA = {
  title: 'LatReach - Puerto Vallarta',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

/**
 * Configuración de webpack
 */
module.exports = {

  /**
   * Metadatos estáticos para el index.html
   */
  metadata: METADATA,

  /**
   * Archivos de entrada
   */
  entry: {
    'polyfills':  './src/polyfills.browser.js',
    'vendor':     './src/vendor.browser.js',
    'main':       './src/main.js'
  }

  /**
   * Resolución de modulos
   */
  resolve: {

    extensions: [ '', 'js', 'css', 'scss' ],
    root: helpers.root('src'),
    modulesDirectories

  }
};
