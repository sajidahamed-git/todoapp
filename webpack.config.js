const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: 'app/index.html',  // The HTML file will be placed inside the "app" folder

    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    // port: 9000, // Set the port for the development server
    // open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement (HMR)
    watchFiles: ["./src/**/*.html","./src/**/*.js"], // Specify which files to watch for changes

  },
  module: {
    rules: [{
      test:/\.html$/i,
      loader:'html-loader',
    },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
