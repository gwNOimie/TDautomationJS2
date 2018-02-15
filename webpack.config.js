const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  entry: {
    front:'./src/front/js/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {}
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/front/html/index.html'
  })]
},{
  entry: {
    back:'./src/back/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  target: 'node',
}];
