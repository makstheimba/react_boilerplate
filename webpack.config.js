module.exports = {
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    devServer: {
        inline: true,
        port: 8000,
        contentBase: "./src"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /typings/],
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-1"]
                }
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /typings/],
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/, /typings/],
                loaders: ["style", "css"]
            }
        ]
    }
}