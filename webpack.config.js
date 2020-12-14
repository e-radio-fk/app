const path = require('path');

module.exports = {
  entry: {
    woofmark: path.resolve(__dirname, "_webpack/woofmark.js")
  },
  output: {
    path: path.resolve(__dirname, "src/assets/js")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      }
    ]
  }
};