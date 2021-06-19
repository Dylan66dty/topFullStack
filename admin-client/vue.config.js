
module.exports = {
  devServer: {
    proxy: {
      '/dev': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }

      }
    }
  }

}
