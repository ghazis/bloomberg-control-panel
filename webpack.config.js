var path = require("path");
var webpack = require("webpack");
var nodePath = path.join(__dirname, "node_modules");

module.exports = {

  context: __dirname + "/client",
  entry: {
    app: "./scripts/main.js",
    html: "./index.html"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: __dirname + "/dist/"
  },

  resolve: {
    alias: {
      "lodash" : "lodash",
      "jQuery" : "jquery",
      "materialize-css" : path.join(nodePath, "materialize-css", "bin", "materialize.css"),
      "c3-css" : path.join(nodePath, "c3", "c3.css")
    },
    extensions: [".js", ".json", ".coffee", ".css"]
   },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }
    ],

  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
}