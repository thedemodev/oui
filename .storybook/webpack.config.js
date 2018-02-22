const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      }, 
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              "transform-decorators-legacy",
              "transform-decorators"
            ]
          }
        }
      },
    ]
  }
};
