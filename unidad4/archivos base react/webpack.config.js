const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './main.js', // Archivo origen
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
        template: './index.html'
    })
  ]
};

module.exports = config;


