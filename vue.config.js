// 关闭eslint,反向代理......vue 给我们最后一次配置项目的机会
module.exports = {
    lintOnSave: false,//关闭eslint
    
    devServer: {
    //   反向代理
      proxy: {
          // 以ajax开头的进行
          "/ajax": {
              target: 'https://m.maoyan.com',
              changeOrigin: true
          },
          "/sns": {
            target: 'https://m.maoyan.com',
            changeOrigin: true
        }
      }
    },
    publicPath: './'//加入这个就不会部署服务器的时候报错
}
