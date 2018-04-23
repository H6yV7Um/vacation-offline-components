// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        'index': path.resolve(__dirname, "./src/index.js")
    },
    output: {
        filename: "vacation-offline-components.min.js",
        path: path.resolve(__dirname, "./dist"),
        library: 'vacationOfflineComponents',
        libraryTarget: "umd"
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