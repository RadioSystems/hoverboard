var webpack = require("webpack");
var path = require("path");

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

module.exports = {
    entry: "./app/ui/index.js",
    output: {
        path: __dirname,
        filename: "app/ui/app.js"
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), //optimizes order that items are bundled
        new webpack.DefinePlugin(GLOBALS), //Ensures React builds in prod mode
        new webpack.optimize.DedupePlugin(), //removes duplicate packages,
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/,
                include: path.join(__dirname, 'app/ui'), loaders: ['babel'],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.json$/, loader: 'json' },
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']}
        ]
    }
};