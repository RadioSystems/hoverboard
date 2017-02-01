const express = require("express");
const webpack = require("webpack");
const path = require("path");
const config = require("../webpack.config.dev");

const port = 3030;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
    res.sendFile(path.resolve("app/" + req.path));
});

app.listen(port, (error) => {
    if(error){
        console.log(error);
    }
});