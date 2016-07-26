const helpers = require("./helpers");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NoErrorsPlugin = require("webpack/lib/NoErrorsPlugin");
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const ENV = process.env.NODE_ENV = process.env.ENV = "production";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig, {
    host: HOST,
    port: PORT,
    ENV: ENV
});

module.exports = webpackMerge(commonConfig, {
    debug: false,
    devtool: "source-map",
    output: {
        path: helpers.root("dist"),
        filename: "[name].[chunkhash].bundle.js", // ALT: Change [chunkhash] for [hash]
        sourceMapFilename: "[name].[chunkhash].bundle.map", // ALT: Change [chunkhash] for [hash]
        chunkFilename: "[id].[chunkhash].chunk.js"
    },
    plugins: [
        new NoErrorsPlugin(),
        new WebpackMd5Hash(),
        new DedupePlugin(),
        new DefinePlugin({
            "ENV": JSON.stringify(METADATA.ENV),
            "process.env": {
                "ENV": JSON.stringify(METADATA.ENV),
                "NODE_ENV": JSON.stringify(METADATA.ENV),
            }
        }),
        new UglifyJsPlugin({
            beauty: false,
            mangle: { screw_ie8: true },
            compress: { warnings: false, screw_ie8: true },
            comments: false
        }),

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
