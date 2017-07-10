var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react', 'stage-2']}
      }
    ]
   },
    output: {
        filename: 'dev.js',
        path: __dirname + '/build'
   },
   resolve: { extensions: ['.js', '.jsx'] }
}

