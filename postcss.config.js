module.exports = {
  plugins: {
    'postcss-any2rem': {
      remUnit: 75,
      any: 'rpx',
      exclude: /cube-ui/
    }
  }
}
