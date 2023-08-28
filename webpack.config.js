const path = require('path');

const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const getSrcPath = (filePath) => {
    const src = path.resolve(__dirname, 'src');
    return path.posix.join(src.replace(/\\/g, '/'), filePath);
  };

module.exports = {
  mode: 'production',  
  entry: getSrcPath('/index.js'), // Replace with your entry file
  output: {
    filename: 'code.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Output directory
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/i,
        extractComments: false,
        terserOptions: {
          ecma: 2020,
          compress: true,
          mangle: {
            reserved: ['global'],
            keep_fnames: true, // Easier debugging in the browser
          },
          format: {
            comments: /@customfunction/i,
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
  },
  watchOptions: {
    ignored: ['**/dist', '**/node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: getSrcPath('**/*.html'),
          to: '[name][ext]',
          noErrorOnMissing: true,
        },
        {
          from: getSrcPath('../appsscript.json'),
          to: '[name][ext]',
        },
        {
          from: getSrcPath('../functions/*.js'),
          to: '[name][ext]',
          noErrorOnMissing: true,
          info: { minimized: true },
        },
        // {
        //   from: getSrcPath('../node_modules/apps-script-oauth2/dist/OAuth2.gs'),
        //   to: 'OAuth2.js',
        //   noErrorOnMissing: true,
        //   info: { minimized: true },
        // },
      ],
    }),
    new GasPlugin({
        comments: false,
        source: 'shubhankarDev8',
      }),
  ]
};