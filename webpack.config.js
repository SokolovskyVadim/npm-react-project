const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {index: '/'},
        open: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
    })],
}
