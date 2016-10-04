var path = require("path");

module.exports = {
    entry: "./app/ui/index.js",
    output: {
        path: __dirname,
        filename: "app/ui/app.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.js$/,
                include: path.join(__dirname, 'app/ui'), loaders: ['babel'],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.json$/, loader: 'json' },
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']}
        ]
    }
};