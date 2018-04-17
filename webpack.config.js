const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        'app': path.resolve(__dirname, "./test/index.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist/"),
        library: 'vacation-offline-component',
        libraryTarget: 'umd',
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
                use: ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    }]
                }),
                exclude: path.resolve(__dirname, "./node_modules/")
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("[name].css"),
        // new webpack.optimize.UglifyJsPlugin(),
        new HTMLWebpackPlugin({
            fileName: 'index.html',
            template: path.resolve(__dirname, "./test/index.html"),
            inject: true,
            hash: true
        })
    ]
}