const HTMLWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        'app': path.resolve(__dirname, "./test/index.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./build/")
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react', "stage-0"]
                    }
                },
                exclude: [path.resolve(__dirname, "./node_modules/")]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    }
                ],
                exclude: path.resolve(__dirname, "./node_modules/")
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            fileName: 'index.html',
            template: path.resolve(__dirname, "./test/index.html"),
            inject: true,
            hash: true
        })
    ]
}