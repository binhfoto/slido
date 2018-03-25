const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./server/config');

const webpackConfig = {

    devtool: 'eval',

    mode: 'development',

    entry: ['babel-register', 'babel-polyfill', path.join(__dirname, 'public/component/App.js')],

    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-2']
                    }
                },

            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            ADMIN_API_URL: JSON.stringify(config.url),
            ENABLE_REDUX_DEV_TOOL: JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            template: 'public/template/index.html',
            filename:  __dirname + '/public/index.html'
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
};

module.exports = webpackConfig;