var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();  //这里我们并不想使用browser-sync插件的全部内容，只需要其中的create方法。

gulp.task("watch",function(){ 
	browserSync.init({
		notify:false,
		//告诉browserSync我们的网站在何处,比如index.html的位置
		server:{
			baseDir:"app"
		}
	});
	
	watch("./app/index.html",function(){ 
		browserSync.reload();
	});

	watch("./app/assets/styles/**/*.css",function(){ 
		gulp.start("cssInject");
	});
});

gulp.task("cssInject",["styles"],function(){
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});