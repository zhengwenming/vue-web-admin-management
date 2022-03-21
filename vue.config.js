

const path = require('path')

module.exports = {
    publicPath: '/',
    // assetsPublicPath: '/',
    // module:{
    //     rules: [
    //         {
    //           test: /\.css$/,
    //           use: [
    //             'style-loader',
    //             'css-loader',
    //             'less-loader'
    //           ]
    //         }
    //       ]
    // },
    configureWebpack: (config) => {
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src')
                } // 别名配置
            }
        })
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
     // webpack-dev-server 相关配置
     devServer: {
        open:true,
        port:8000,
        // host:'localhost',//只能本机访问
        host:'0.0.0.0',//本机和同网段的其他机器也能通过ip地址访问
        proxy: {
            '/ax_api': {
                target: 'http://www.baidu.com/api',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    },
};