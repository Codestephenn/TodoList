// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // Best for debugging
  devServer: {
    static: './dist', // Serve content from dist folder
    watchFiles: ["./src/index.html"], // Watch for changes in HTML
  },
});