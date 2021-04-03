const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  devServer: {
    inline: true,
    open: true,
    publicPath: "/build",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/assets/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    // Allows importing JS / JSX files without specifying extension
    extensions: [".js", ".jsx", ".mjs", ".css", ".tsx", ".ts"],
  },
  plugins: [new Dotenv()],
};
