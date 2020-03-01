module.exports = {
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    // outputDir: 'dist',
    // pages:{ type:Object,Default:undfind }
    devServer: {
      port: 8000, // 端口号
      host: 'localhost',
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
        '/apis': {    //将www.exaple.com印射为/apis
            target: 'http://127.0.0.1:8001',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
              '^/apis': ''   //需要rewrite的,
            }
          }
    } // 配置多个代理
    }
}