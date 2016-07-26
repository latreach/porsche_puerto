const helpers = require("./helpers");

/* Webpack Plugins */
const ProvidePlugin = require("webpack/lib/ProvidePlugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");

/* Webpack Constants */
const ENV = process.env.ENV = process.env.NODE_ENV = "test";


/* Webpack testing configuration 
 * See ./webpack.dev.js for details
 * */
module.exports = {

    /* Soruce map for Karma from the help of karma-sourcemap-laoder and
     * karma-webpack
     * See: https://github.com/webpack/karma-webpack#source-maps
     * */
    devtool: "inline-source-map",

    resolve: {
        root: helpers.root("src"),
        extensions: ["", ".ts", ".js"]
    },

    module: {
        preLoaders: [

            /*Tslint loader*/
            {
                test: /\.ts$/,
                loader: "tslint-loader",
                exclude: [ helpers.root("node_modules") ]
            },

            /*Source Map Loader */
            {
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [
                    helpers.root("node_modules/rxjs"),
                    helpers.root("node_modules/@angular")
                ]
            }

        ], 

        loaders: [

            /* TypeScript loader */
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                query: {
                    compilerOptions: {
                        // Remove TypeScript helpers to be injected below by DefinePlugin
                        removeComments: true 
                    }
                },
                exclude: [ /\.e2e\.ts$/ ]
            },

            /* JSON loader */
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude: [ helpers.root("src/index.html") ]
            },

            /* CSS loaders */
            {
                test: /\.css$/,
                loaders: [
                    "to-string-loader",
                    "css-loader"
                ],
                exclude: [ helpers.root("src/index.html") ]
            },

            /* Raw loader for HTML */
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: [ helpers.root("src/index.html") ]
            }

        ],

        postLoaders: [
            /* Instruments JS files with Istanbul for subsequent code coverage
             * reporting.
             * Instrument only testing sources
             * See: https://github.com/deepsweet/istanbul-instrumenter-loader
             * */
            {
                test: /\.(js|ts)$/,
                loader: "istanbul-instrumenter-loader",
                include: helpers.root("src"),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]

    },

    plugins: [
        /* Define Plugin */
        new DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'HMR': false,
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV),
                'HMR': false,
            }
        }),
    ],

    tslint: {
        emmitErrors: false,
        failOnHint: false,
        resourcePath: "src"
    },

    node: {
        global: "window",
        process: false,
        crypto: "empty",
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

};
