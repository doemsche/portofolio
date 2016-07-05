var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/tpl_index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'file-loader' 
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]

}
