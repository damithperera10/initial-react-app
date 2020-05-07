const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index-bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 800000,
                            name: "assets/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: "./src/assets/img",
                to: "./assets/img"
            },
            {
                from: "./src/assets/css",
                to: "./assets/css"
            },
            {
                from: "./src/assets/icon",
                to: "./assets/icon"
            },
            {
                from: "./src/assets/reports",
                to: "./assets/reports"
            }

        ])
    ]
};