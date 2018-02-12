var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('appServer' , function(){
	browserSync.init({
		port:9090,
		server:{
			baseDir:'build',
			routes:{
				'/bower_components':'bower_components'
			}
		}
	})

	gulp.watch(['build/**/*.*','src/**/*.*']).on('change', browserSync.reload);
})

gulp.task('testServer', function(){
	//task
})


//gulp.task(['appServer', 'testServer']);

gulp.task('default', ['appServer']);