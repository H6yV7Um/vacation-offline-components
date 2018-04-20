// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        'index': path.resolve(__dirname, "./src/index.js")
    },
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "./dist"),
        library: 'vacation-offline-components',
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react", "stage-0"]
                    }
                },
                exclude: path.resolve(__dirname, "./node_modules")
            },
            {
                test: /\.css$/,
                use: [
                    "iso-morphic-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]"
                        }
                    }
                ],
                exclude: path.resolve(__dirname, "./node_modules")
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
    plugins: [
        new CleanWebpackPlugin(['./dist'])
    ],
    mode: 'production'
}