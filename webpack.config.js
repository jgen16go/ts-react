const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: [path.resolve(__dirname, 'src/js/main.tsx')]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: true
            }
          }
        ]
      },

      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: []
}
