const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
      path: require.resolve('path-browserify')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  devtool: "inline-source-map", // produces eval()less webpack output, allowing a CSP without 'unsafe-eval' (https://github.com/webpack/webpack/issues/5627#issuecomment-374386048)
  module: {
    rules,
  },
  plugins: plugins,
  // resolve: {
  // },
};
