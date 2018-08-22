const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const $ = gulpLoadPlugins();

module.exports = function(setting) {

    setting.ejs.forEach( function(e,i,entryPoint) {

        const TARGET = setting.ejs[i].target; // 監視ファイル
        const IGNORE = setting.ejs[i].ignore; // 除外ファイル
        const EXTENSION = setting.ejs[i].extension; // 出力ファイル拡張子
        const DIST = setting.ejs[i].dist; // 出力ディレクトリ

        const SRC = TARGET.concat(IGNORE); //除外ファイルを配列に結合

        gulp.src( SRC )
        .pipe($.plumber())
        .pipe($.ejs( {}, {}, { ext: EXTENSION })) // バージョンによって引数の数が異なります。記述はv3.0。
        .pipe( gulp.dest( DIST ) );

    });

};
