module.exports = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
};
