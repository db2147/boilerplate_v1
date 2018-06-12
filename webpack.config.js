const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {  
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, { 
        test: /\.s?css$/,
        use: [ 
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    // devtool is where we can specify the type of source map we want
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
};

// loader