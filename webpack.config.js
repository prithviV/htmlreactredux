const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let htmlPageNames = ['about', 'contact'];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        },
        {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'about',
      template: './src/about.ejs'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact',
      template: './src/contact.ejs'
    }),
    new HtmlWebpackPlugin({
      filename: 'gallery',
      template: './src/gallery.ejs'
    }),
  ],
};