import { src, dest, watch, series, parallel } from "gulp";
import yargs from "yargs";
import sass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import autoprefixer from "autoprefixer";
import replace from 'gulp-replace';
import sourcemaps from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import purgecss from "gulp-purgecss";
import named from 'vinyl-named';
import webpack from 'webpack-stream';
const PRODUCTION = yargs.argv.prod;

// JS (no usado en este proyecto)
// export const scripts = () => {
//   return src(['src/js/scripts.js'])
//     .pipe(named())
//     .pipe(webpack({
//       module: {
//         rules: [
//           {
//             test: /\.js$/,
//             use: {
//               loader: 'babel-loader',
//               options: {
//                 presets: []
//             }
//           }
//         }
//       ]
//     },
//     mode: PRODUCTION ? 'production' : 'development',
//     devtool: !PRODUCTION ? 'eval' : false,
//     output: {
//       filename: '[name].min.js'
//     },
//   }))
//   .pipe(dest('assets/js'));
// }

// Estilos
export const styles = () => {
  return src(["style.scss"])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
    .pipe(
      gulpif(
        PRODUCTION,
        purgecss({
          content: [
            "*.html",
          ],
          safelist: [
            "show",
            "menu-visible",
            "hover",
            "focus",
            "active",
            "after",
            "before",
            "is-active",
            "collapse",
            "collapsed",
            "collapsing",
            "modal-backdrop",
            /is-^/,
            /^feedback-/,
          ],
        })
      )
    )
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie9'})))
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('.'))
};

export const watchForChanges = () => {
  watch(["src/scss/**/*.scss", "style.scss"], series(styles));
  // watch('src/js/**/*.js', series(scripts));
};

export const dev = series(parallel(styles), watchForChanges);
export const build = series(parallel(styles));
export default dev;
