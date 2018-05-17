//可以直接导入path包，而无需npm install去安装该包，因为它是node.js中的一部分
var path = require("path");

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        //webpack要求我们提供绝对路径而不是相对路径
        //__dirname变量会创建一个当前文件目录的绝对路径
        //这样就产生了一个到指定生成目录的绝对路径
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    //表示要使用的是ES2015的标准（即ES6，当然如果需要也可以使用es2016，即ES7）
                    presets: ["es2015"]
                },
                //通过一个正则表达式，告知webpack，此babel-loader加载器只应用于js文件
                //而且所需转换的js文件越少，webpack打包过程运行的就越快
                test: /\.js$/,
                //告知webpack，哪些js文件不使用此babel-loader加载器（比如我们项目中如果使用到了jquery文件，其中的js文件就没有必要应用babel加载器）
                //很简单，基本上作为node模块加载进来的js文件都不需要Babel转换
                exclude: /node_modules/
            }
        ]
    }
};