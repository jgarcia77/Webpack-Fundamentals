var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("js"),
    entry: ["./app"],
    output: {
        path: path.resolve("build/"),
        publicPath: "/public/assets/",
        filename: "bundle.js"
    },
    watch: true,
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        contentBase: "public"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader']
                  })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader', 'sass-loader']
                })
              }
        ]
    },
    resolve: {
        extensions: [".js", ".es6"]
    }
}