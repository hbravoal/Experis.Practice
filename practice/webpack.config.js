const path = require("path");
const {merge} = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common,
  {
    plugins:[
      new Dotenv({path:'./.env'}),
      
        new HtmlWebpackPlugin({
            base:'/',
            template:path.resolve(__dirname, "index.html"),          
            title: 'Inicio - Localhost',
            
            minify:true,
            'meta': {
              'viewport': 'width=device-width, width=device-width, initial-scale=1.0',
              // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              'theme-color': '#ffffff',
              // Will generate: <meta name="theme-color" content="#4285f4">
              'msapplication-TileColor': '#ffffff'
              
              
            }
        }),
        
      
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
      publicPath:'/'
    },
    mode:'development',
    
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 9000,
      
      historyApiFallback: true // creo q fue esto lo q faltaba
    }
  
  }
  );