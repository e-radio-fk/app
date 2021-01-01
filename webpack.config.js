const path = require('path');

module.exports = {
  entry: {
    woofmark: path.resolve(__dirname, "_webpack/socket.io.js")
  },
  output: {
    path: path.resolve(__dirname, "docs/scripts/")
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
