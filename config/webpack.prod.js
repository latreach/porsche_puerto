const helpers = require("./helpers");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

/* Webpack Plugins */
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NoErrorsPlugin = require("webpack/lib/NoErrorsPlugin");
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

/* Webpack Constants */
const ENV = process.env.NODE_ENV = process.env.ENV = "production";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: false
});

/* Webpack Production Configuration
 * See ./webpack.dev.js for details
 */
module.exports = webpackMerge(commonConfig, {

    debug: false,

    devtool: "source-map",

    output: {
        path: helpers.root("dist"),
        filename: "[name].[chunkhash].bundle.js", // ALT: Change [chunkhash] for [hash]
        sourceMapFilename: "[name].[chunkhash].bundle.map", // ALT: Change [chunkhash] for [hash]
        chunkFilename: "[id].[chunkhash].chunk.js"
    },

    /* HTML Loader configuration
     * Use it if html loader used insted of raw loader
     * Set minimize false for ng2 workaround
     *
     * htmlLoader: {
     *     minimize: false
     * },
     * */

    plugins: [

        /* Plugin: Webpack No Errors Plugin
         * Description: Stops the build if there is any error
         * */
        new NoErrorsPlugin(),

        /* Plugin: Webpack MD5 Hash
         * Description: Plugin to replace a standard webpack chunkhash with md5.
         * */
        new WebpackMd5Hash(),

        /* Plugin: Webpack Dedupe Plugin
         * Description: Prevents the inclusion of duplicate code into the bundle
         * */
        new DedupePlugin(),

        /* See ./webpack.dev.js for details */
        new DefinePlugin({
            "ENV": JSON.stringify(METADATA.ENV),
            "HMR": METADATA.HMR,
            "process.env": {
                "ENV": JSON.stringify(METADATA.ENV),
                "NODE_ENV": JSON.stringify(METADATA.ENV),
                "HMR": METADATA.HMR
            }
        }),

        /* Plugin: UglifyJs Plugin
         * Description: Minimize all JavaScript output of chunks.
         * Loaders are switched into minimizing mode.
         * */
        new UglifyJsPlugin({
            beauty: false,
            mangle: { 
                screw_ie8: true 
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),

        /* Plugin: Webpack Normal Module Replacement Plugin
         * Description: Replace resources that matches resoruceRegExo with
         * newresource
         * */
        new NormalModuleReplacementPlugin(
            /angular2-hmr/,
            helpers.root("config/modules/angular2-hmr-prod.js")
        ),

        /* Plugin: Webpack Ignore Plugin
         * Description: Don't generate modules fore requiests mathching the
         * provided RegExp.
         * */
        // new IgnorePlugin(/angular2-hmr/),

        /* Plugin: Webpack Compression Plugin
         * Description: Prepares compressed versions of assets to serve them
         * with Content-Encoding
         * */
        // new CompressionPlugin({
        //     regExp: /\.(css|html|js|map)$/,
        //     threshold: 2 * 1024
        // }),
        
        /* Configuration for Text Extract Plugin
         * Use in case of using style and css loaders
         * */
        // new ExtractTextPlugin("[name].[hash].css"), 

    ],

    tsLint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: "src"
    },

    /* Html loader advanced options
     * TODO: Neet to workaround Angular 2's html syntax => 
     *     #id [bind] (event) *ngfor
     * */
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    },

    node: {
        global: 'window',
        crypto: 'empty',
        process: false,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

});
