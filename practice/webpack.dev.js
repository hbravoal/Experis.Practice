const path = require("path");
const {merge} = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common,
  {
    plugins:[
      new Dotenv({path:'./.env.development'}),
      
        new HtmlWebpackPlugin({
            base:'/',
            // base:'/Mastercard/ATuLado/Site/',
            template:path.resolve(__dirname, "index.html"),          
            title: 'Inicio- Testing',
           
        }),
        
      
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
      publicPath:'/'
      // publicPath:'/Mastercard/ATuLado/Site/'
    },
    mode:'development',
    
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 9000,
      
      historyApiFallback: true // creo q fue esto lo q faltaba
    }
  
  }
  );
  