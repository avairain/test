const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "./src/index.tsx"),
  output: {
    path: path.join(__dirname, "/lib/dist"),
    filename: "bundle.js",
    library: '@avairain/test-btt',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheCompression: false
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: 'gingkoo-[name]__[local]--[hash:base64:5]'
              },
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
              sourceMap: true
            },
          },
          {
            loader: 'less-loader',
            options: {
              modules: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // { from: path.join(__dirname, "./src/component"),  to: path.join(__dirname, "./lib") + '/src/component' },
        // { from: path.join(__dirname, "./src/hooks"),  to: path.join(__dirname, "./lib") + '/src/hooks' },
        // { from: path.join(__dirname, "./src/common"),  to: path.join(__dirname, "./lib") + '/src/common' },
        { from: path.join(__dirname, "./src"),  to: path.join(__dirname, "./lib") + '/src' },
        { from: path.join(__dirname, "./README.md"),  to: path.join(__dirname, "./lib") + '/README.md' },
      ]
    }), 
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  devServer: {
    port: 3001
  }
};