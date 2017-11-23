var path = require("path");

module.exports = {
    context: path.resolve("js"),
    entry: ["./app"],
    output: {
        path: path.resolve("build/"),
        publicPath: "/public/assets/js",
        filename: "bundle.js"
    },
    watch: true,
    devServer: {
        contentBase: "public"
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json-loader!" + path.resolve('loaders/strip')
            }
        ]
    },
    resolve: {
        extensions: [".js", ".es6"]
    }
}