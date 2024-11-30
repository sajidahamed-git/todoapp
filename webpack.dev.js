const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer:{
    open:true,
    watchFiles:["./src/index.html"]
  },
  devtool:"eval-source-map"
};

module.exports = merge(commonConfig, devConfig);
