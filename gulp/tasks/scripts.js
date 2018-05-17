var gulp = require("gulp"),
webpack = require("webpack");

gulp.task("scripts",function(){
    //使用webpack之前，需要告知其webpack.config.js配置文件的路径，通过require的方式导入,此时webpack命令就会自动执行
    webpack(require("../../webpack.config,js"), function(err, stats){ 
        //该匿名回调中的内容将会在webpack完成后执行,所以可以用来打印潜在的出错信息
        //err和stats是webpack提供给回调的两个参数
        if (err){
            console.log(err.toString());
        }
        console.log(stats.toString());
    });
});