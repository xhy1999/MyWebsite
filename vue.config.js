const WebpackAliyunOssPlugin = require('./oss');

module.exports = {
    outputDir: 'docs',
    productionSourceMap: false,

    devServer: {
        port: 80,
        disableHostCheck: true
    },

    css: {
        //sourceMap: true
    },

    configureWebpack: {
        plugins: [
            new WebpackAliyunOssPlugin({
                enable: false
            })
        ]
    },

    publicPath: '/'
};
