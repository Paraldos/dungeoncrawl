const { watch } = require("fs");
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    watchFiles: ["src/**/*", "dist/**/*"],
    hot: true,
  },
};
