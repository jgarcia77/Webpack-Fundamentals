var path = require("path");

module.exports = {
    context: path.resolve("js"),
    entry: ["./app", "./utils"],
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
                test: /\.(es6|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".es6"]
    }
}