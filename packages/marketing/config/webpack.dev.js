const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.js')
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
        index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
    }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename:'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}
console.log('commonConfig', JSON.stringify(commonConfig))
console.log('devConfig', JSON.stringify(devConfig))

module.exports = merge(commonConfig, devConfig)