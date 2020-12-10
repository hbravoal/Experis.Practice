const path = require("path");

module.exports ={
  
  
  entry: path.resolve(__dirname, "src/index.js"),
  
  resolve: {
    alias: {
      Components: path.resolve(__dirname,'src','Components'),            
      Services: path.resolve(__dirname,'src','Services'),
      Helper: path.resolve(__dirname,'src','Helper'),
      assets: path.resolve(__dirname,'src','assets'),
      // Hooks: path.resolve(__dirname,'src','Hooks'),
      Data: path.resolve(__dirname,'src','Data'),
       Types: path.resolve(__dirname,'src','Types'),
       Reducers: path.resolve(__dirname,'src','Reducers'),
       Context: path.resolve(__dirname,'src','Context'),
  },
  
    extensions: [".js", ".jsx"]
  },

    
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ttf|eot|woff|woof2|pdf)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  }

};