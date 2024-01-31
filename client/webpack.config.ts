import path from 'path';
import { Configuration as WebpackConfiguration, DefinePlugin } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration;
}

const config: Configuration = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      
      //  TypeScript loader (doesn't check types: use `npm run check`)
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      
      //  CSS loaders (extracts CSS into separate files instead of bundle.js)
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
		new DefinePlugin({
			'__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
		}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
			favicon: './public/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
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
    client: {
      logging: 'warn',
    },
  },
};

export default config;

