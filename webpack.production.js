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
        filename: 'prod.js',
        path: __dirname + '/build'
   },
   resolve: { extensions: ['.js', '.jsx'] },
   plugins: [
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     })
   ],

}

