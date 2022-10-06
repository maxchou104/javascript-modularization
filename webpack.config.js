const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: { main: './src/index.ts' },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  resolve: { extensions: [".ts", ".js"] },
  // devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: "static", to: "dest" }
      ],
    }),
  ],
};

module.exports = (env, args) => {
  return config;
}