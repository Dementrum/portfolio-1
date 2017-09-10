const gulp = require('gulp'),
  normalize = require('node-normalize-scss'),
  del = require('del'),
  prefix = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  cheerio = require('gulp-cheerio'),
  concat = require('gulp-concat'),
  csso = require('gulp-csso'),
  eslint = require('gulp-eslint'),
  imageMin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  svgSprite = require('gulp-svg-sprite'),
  svgMin = require('gulp-svgmin'),
  ttf2woff = require('gulp-ttf2woff'),
  uglify = require('gulp-uglify'),
  gulpWebpack = require('gulp-webpack'),
  webpackConfig = require('./webpack.config.js'),
  webpack = require('webpack'),
  browserSync = require('browser-sync').create();

const paths = {
  root: './dist',
  styles:{
    src: 'src/styles/**/*.scss',
    dest: 'dist/styles/',
  },
  scripts:{
    src: 'src/scripts/**/*.js',
    dest: 'dist/scripts/',
  },
  pages:{
    watch: 'src/templates/**/*.pug',
    src: 'src/templates/pages/*.pug',
    dest: './dist',
  },
  fonts:{
    src: 'src/fonts/**/*.ttf',
    dest: 'dist/fonts',
  },
  fontsOther:{
    src: ['src/fonts/**/*.*', '!src/fonts/**/*.ttf'],
    dest: 'dist/fonts',
  },
  img:{
    src: 'src/img/**/*.+(jpg|png|gif)',
    dest: 'dist/img/',
  },
  svg:{
    src: 'src/img/sprite/*.svg',
    dest: 'dist/img',
  }
}

//PUG to HTML
function pugConvert() {
  return gulp.src(paths.pages.src)
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(notify('Pug convert successfully'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.pages.dest))
}

//SASS to CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed', includePaths: require('node-normalize-scss').includePaths}))
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(prefix('last 3 version', '> 1%', 'ie 10', 'Opera 12.1'))
    .pipe(rename({suffix: '.min'}))
    .pipe(notify('Sass convert successfully'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

//TODO: webpack, babel, eslint
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(notify('Scripts convert successfully'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.scripts.dest))
}

// Images Compression
function imageMinify() {
  return gulp.src(paths.img.src)
    .pipe(plumber())
    .pipe(imageMin())
    .pipe(notify('Images compressed successfully'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.img.dest))
}

//Creating SVG sprite
function spriteCreate () {
  return gulp.src(paths.svg.src)
    .pipe(plumber())
    .pipe(svgMin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[style]').removeAttr('style');
            $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../sprite.svg",
          example: {
            dest: '../tmp/spriteSvgDemo.html' // демо html
          }
        }
      }
    }))
    .pipe(notify('Sprite created successfully'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.svg.dest))
}

//Fonts Conversion and Copying
function fontsConvert() {
  return gulp.src(paths.fonts.src)
    .pipe(plumber())
    .pipe(ttf2woff())
    .pipe(notify('Fonts convert successfully'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.fonts.dest))
}

function fontsCopy(){
  return gulp.src(paths.fontsOther.src)
    .pipe(gulp.dest(paths.fontsOther.dest))
}

function clean() {
  return del(paths.root)
}

function watch() {
  gulp.watch('src/templates/**/*.pug', pugConvert);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.img.src, imageMinify);
  gulp.watch(paths.fonts.src, fontsConvert);
  gulp.watch(paths.svg.src, spriteCreate);
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.root
    }
  });
  browserSync.watch([paths.root + '/**/*.*'], browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.watch = watch;
exports.imageMinify = imageMinify;
exports.fontsConvert = fontsConvert;
exports.fontsCopy = fontsCopy;
exports.pugConvert = pugConvert;
exports.spriteCreate = spriteCreate;
exports.serve = serve;


gulp.task('default', gulp.series(
  clean,
  gulp.parallel(fontsConvert, fontsCopy, imageMinify, spriteCreate),
  gulp.parallel(pugConvert, styles, scripts),
  gulp.parallel(watch, serve)
));