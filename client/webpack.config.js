const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader', // perform type-checking with `npm run check`
        exclude: /node_modules/
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  mode: 'development',

  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
