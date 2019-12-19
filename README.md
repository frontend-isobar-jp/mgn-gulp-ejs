# Download

[↓ Download zip file](https://github.com/frontend-isobar-jp/mgn-gulp-ejs/blob/master/mgn-gulp-ejs.zip?raw=true)

**ダウンロードしたファイルをプロジェクトルート直下に配置します。**

----


# Ejs |

## npm install
```
$ npm install gulp-ejs --save
```
## 1. setting追加

'ejs' には 監視ファイル、除外ファイル、出力ファイルの拡張子、コンパイル先ディレクトリを設定します。(必須)

```
const SETTING = {

    'ejs': [
        {
            'target': [
                './src/ejs/**/**/*.ejs'
            ],
            'ignore': [
                "!" + './src/ejs/**/**/_*.ejs',
            ],
            'extension': '.html',
            'dist': ROOT_PATH,
        }
        // 対象ディレクトリを増やす場合は、配列を追加する
    ],

}
```

## 2. Module Import

```
const Ejs = require("./gulp/ejs");
```

## 3. task定義

```
gulp.task('ejs', (done) => {
    Ejs(SETTING);
    done();
});

gulp.task('watch', () => {

    SETTING.ejs.forEach( function(e,i,entryPoint) {

        gulp.watch(SETTING.['[i].target, gulp.task("['"));

    });

});
```

## 4. Default Task
（ taskListへ記述することで、default起動するようになります。 ）

```
gulp.task(
    "default",
    gulp.series(gulp.parallel(
        'ejs"
    ))
);
```
