var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");


gulp.task("styles",function(){ 
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postcss([cssImport, mixins, cssvars, autoprefixer, nested]))
		.on("error",function(errorMessage){ 
			//打印错误信息，以便于我们对其进行修改，至于为何使用toString()是为了能够更好的在命令行中显示错误信息。
			console.log(errorMessage.toString());
			//告知gulp，出现错误，终止当前任务的执行(但是gulp监听器会继续运行)
			this.emit("end");
		})
		.pipe(gulp.dest("./app/temp/styles"));
});