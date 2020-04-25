const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? "production" : "development",
  devtool: process.env.NODE_ENV === 'production' ? "" : "source-map",
  entry: [path.join(__dirname, "/src/index.js")],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader",
            options: {
              sourceMap: process.env.NODE_ENV === 'production',
              modules: {
                localIdentName: process.env.NODE_ENV === 'production' ? '[local]--[hash:base64:10]' : '[path][name]__[local]--[hash:base64:10]'
              }
            }
          },
          { loader: "sass-loader" }
        ]
      } 
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true
  }
};