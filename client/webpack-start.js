require('@babel/register')({
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  presets: ['@babel/preset-typescript'],
});

module.exports = require('./webpack.config.ts');

