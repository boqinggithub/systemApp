const path = require('path')

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true
      }
    }
  },

  pluginOptions: {},
  devServer: {
    disableHostCheck: true
    // proxy: {
    //   "/gws": {
    //     target: 'http://10.1.10.2:9680/nk', // 想要访问接口域名
    //     changeOrigin: true, // 开启跨域,在本地创建一个虚拟服务,然后发送请求的数据,并同时接收请求的数据,这样服务端和服务端进行数据交互就不会有问题
    //     pathRewrite: {
    //       "^/gws": '/gws', // 利用这个地面的值拼接上target里面的地址
    //     }
    //   }
    // }
  },
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 10,
        minChunkSize: 100
      })
    ]
  }

}
