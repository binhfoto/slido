const path = require('path');

const webpackConfig = {

    devtool: 'cheap-module-eval-source-map',

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
};

module.exports = webpackConfig;