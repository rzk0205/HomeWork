const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false,
    host: 'localhost',
    port: 8888,
    https: false,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: 'http://upload.9yuecloud.com:8887', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: ''
        }
      }
    }
  }
})
// module.exports = {
//   devServer: {
//     open: false,
// host: "localhost",
// port: 8888,
// https: false,
//     proxy: {
//   [process.env.VUE_APP_API]: {
//     target: process.env.VUE_API_DEV_TARGET,
//     changeOrigin: true,
//     pathRewrite: {
//       ["^" + process.env.VUE_APP_API]: "",
//     },
//   },
// },
//   }
// }
