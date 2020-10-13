const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const copyPlugin = new CopyWebpackPlugin({ patterns: [{ from: 'src/assets', to: 'src/assets' }] });

module.exports = () => {
  let plugins = [htmlPlugin, copyPlugin];

  return {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
              plugins: [
                '@babel/plugin-transform-regenerator',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(css|scss|sass$)/,
          loader: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
    plugins: plugins,
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, 'src/assets'),
        Components: path.resolve(__dirname, 'src/components'),
        Containers: path.resolve(__dirname, 'src/containers'),
        Store: path.resolve(__dirname, 'src/store'),
        Util: path.resolve(__dirname, 'src/util'),
      },
    },
    devServer: {
      host: '0.0.0.0',
      port: 2000,
      historyApiFallback: true,
    },
  };
};
