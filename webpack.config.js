const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    socket_io: path.resolve(__dirname, "_webpack/socket.io.js")
  },
  output: {
    path: path.resolve(__dirname, "docs/assets/")
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
  },
  resolve: {
    fallback: { 
      "http": require.resolve("stream-http"), 
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
    }
  },
  // externals: { express: "express" }
};
