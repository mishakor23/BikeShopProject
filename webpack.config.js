const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  context: path.resolve('./src'),
  entry: {
    app: ['./app.js']
  },
  output: {
    path: './build',
    filename: 'bundle-[hash].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less') },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|jpe?g|gif)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API: JSON.stringify('http://localhost:3000')
    })
  ]
};
