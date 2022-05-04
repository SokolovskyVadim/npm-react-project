const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: "/"
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {index: '/'},
    open: true,
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // include specific files based on a RegExp
      include: /src/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader',
            options:
              {
                plugins: [process.env !== "test" ? "react-refresh/babel" : ""]
              }
          }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:["file-loader"]
      },
      {test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use:["file-loader"]
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.web.js', '.mjs', '.js', '.ts', '.json', '.web.jsx', '.jsx', '.tsx'],
  },
}