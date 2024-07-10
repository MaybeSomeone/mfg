const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.js')
const packageJson = require('../package.json')
 
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
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
        name: 'container',
        remotes: {
          marketing: 'marketing@http://localhost:8081/remoteEntry.js'
        },
        shared: packageJson.dependencies
    })
  ],
}
// console.log('commonConfig', JSON.stringify(commonConfig))
// console.log('devConfig', JSON.stringify(devConfig))

module.exports = merge(commonConfig, devConfig)