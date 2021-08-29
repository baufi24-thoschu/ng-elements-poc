import { parallel, TaskFunctionCallback } from 'gulp';

const {dest, series, src, watch} = require('gulp');
const {exec} = require('child_process');
const concat = require('gulp-concat');

const build = (cb: any) => {
  exec('npm run build:baufi24-disclaimer:production',(err: Error, stdout: string | Buffer, stderr: string | Buffer) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
};

const concatJs = () => {
  return src('./dist/apps/baufi24-disclaimer/*.js')
    .pipe(concat('baufi24-disclaimer.js'))
    .pipe(dest('./dist/apps/baufi24-disclaimer'));
};

const copy = () => {
  return src('./index.html')
    .pipe(dest('./dist/apps/baufi24-disclaimer'));
}

const run = () => {
  watch('apps/baufi24-disclaimer/src/**/**/*.ts', (cb: any) => {
    exec('gulp',(err: Error, stdout: string | Buffer, stderr: string | Buffer) => {
      console.log(stdout);
      console.error(stderr);
      cb(err);
    });
  });
};

exports.default = series(build, concatJs, copy);
exports.watch = run;
