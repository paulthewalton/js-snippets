/**
 * Gulp Tasks
 * @module Tasks
 */
/* eslint-env node */
const path = require("path");
const gulp = require("gulp");
const ifThen = require("gulp-if");
const log = require("fancy-log");
const chalk = require("chalk");
const eslint = require("gulp-eslint");

let watchFlag = false;

const warn = (str) => log.warn(chalk.yellow(str));
const error = (str) => log.warn(chalk.red(str));
const link = (msg, file) => chalk.underline(`${file}(${msg.line},${msg.column})`);

/**
 * Lint JS with ESLint
 * @example gulp lint
 * @memberof module:Tasks
 */
export function lint() {
	return gulp
		.src("**/*.@(js|jsx)", { cwd: "src" })
		.pipe(eslint({ fix: !watchFlag }))
		.pipe(
			eslint.result((result) => {
				if (result.messages.length) {
					const file = path.relative(__dirname, result.filePath);
					result.messages.forEach((msg) => {
						switch (msg.severity) {
							case 1:
								warn(`${link(msg, file)}: ${msg.message}`);
								break;
							case 2:
								error(`${link(msg, file)}: ${msg.message}`);
								break;
						}
					});
				}
			})
		)
		.pipe(ifThen(!watchFlag, gulp.dest("src")));
}

/**
 * Watch files for changes, running tasks accordingly.
 * @example gulp dev
 * @example gulp
 * @memberof module:Tasks
 */
export function dev() {
	watchFlag = true;
	gulp.watch(`src/**/*.@(js|jsx)`, lint);
}
export default dev;
