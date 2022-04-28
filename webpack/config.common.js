const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'html-loader',
      }
    ]
  },
  {
    test: /\.(s*)css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/image/[contenthash].[ext]'
        }
      }
    ]
  },
]

const common = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,  '../dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
    alias: {
      //{ claveAlias: path.resolve(__dirname, '../src/actions/' )}
      '@actions': path.resolve(__dirname, '../src/actions/'),
      '@reducers': path.resolve(__dirname, '../src/store/reducers/'),
    }
  },
  module: {
    rules: loaders
  },
};

module.exports = { common }

