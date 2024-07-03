const browserSync = require('browser-sync').create();

browserSync.init({
	proxy: "localhost:8080",
	files: "../Projects/populi/src/**/*",
	reloadDebounce: 500
})
