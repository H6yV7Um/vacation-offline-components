// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        'index': path.resolve(__dirname, "./src/index.js")
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist/"),
        libraryTarget: "umd"
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
                exclude: path.resolve(__dirname, "./node_modules/")
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
    externals: {
        "react": {
            commonjs: 'react',
            commonjs2: 'react',
            umd: 'react'
        }
    },
    plugins: []
}