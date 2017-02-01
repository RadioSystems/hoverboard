var webpack = require("webpack");
var path = require("path");

module.exports = {
    debug: true,
    devtool: "cheap-module-eval-source-map",
    entry: [
        "webpack-hot-middleware/client?reload=true",
        "./app/ui/index.js"
    ],
    target: "electron",
    output: {
        path: __dirname + "/app",
        publicPath: "http://localhost:3030/",
        filename: "ui/app.js"
    },
    devServer:{
        contentBase: "./app"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { 
                test: /\.js$/,
                include: path.join(__dirname, 'app/ui'),
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'], // 'babel-loader' is also a legal name to reference
            },
            {test: /\.json$/, loader: 'json' },
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']}
        ]
    }
};