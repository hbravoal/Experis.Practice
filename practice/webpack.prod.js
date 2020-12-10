const path = require("path");
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common,
  {
    plugins:[
      new Dotenv({path:'./.env.production'}),
      new HtmlWebpackPlugin({
        base:'/',
        template:path.resolve(__dirname, "index.html"),
        title: 'Inicio',
        
    }),
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
      chunkFilename: '[name].[chunkhash].js',
      publicPath:'/'
    },
    // mode:'production',
    mode:'production',
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 9000,
      
      historyApiFallback: true // creo q fue esto lo q faltaba
    }
    
  }
  );