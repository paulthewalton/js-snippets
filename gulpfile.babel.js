/**
 * Tasks for Gulp task runner.
 * @module Tasks
 * @requires gulp
 * @requires fancy-log
 * @requires chalk
 * @author Paul Walton
 */

/* eslint-env node, es6 */

const fs = require("fs");
const path = require("path");
const gulp = require("gulp");
const log = require("fancy-log");
const chalk = require("chalk");

let watchFlag = false;

const warn = (str) => log.warn(chalk.yellow(str));
const error = (str) => log.error(chalk.red(str));
const link = (msg, file) => chalk.underline(`${file}(${msg.line},${msg.column})`);

const jsdoc2mdOpts = {
	plugin: "dmd-readable",
	"no-cache": true,
};

/**
 * Generate documentation for Gulp tasks.
 * @global
 * @requires jsdoc-to-markdown
 * @requires dmd-readable
 * @example gulp taskDocs
 */
export function taskDocs(done) {
	const jsdoc2md = require("jsdoc-to-markdown");
	jsdoc2md
		.render({ files: __filename, "example-lang": "sh", ...jsdoc2mdOpts })
		.then((output) => fs.writeFileSync(`docs/${path.basename(__filename)}.md`, output), done());
}

/**
 * Generate documentation for project API.
 * @global
 * @requires jsdoc-to-markdown
 * @requires dmd-readable
 * @example gulp apiDocs
 */
export function apiDocs() {
	const jsdoc2md = require("jsdoc-to-markdown");

	const outPath = `docs/index.md`;

	return jsdoc2md
		.render({ files: "lib/**/!(index|*spec|*test).[tj]s", ...jsdoc2mdOpts })
		.then((data) => fs.promises.writeFile(outPath, data));
}

/**
 * Generate all documentation for this project.
 * @function
 * @global
 * @see {@link taskDocs}
 * @see {@link apiDocs}
 * @example gulp docs
 */
export const docs = gulp.parallel(taskDocs, apiDocs);

function handleESLintOutput(result) {
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
}

/**
 * Lint scripts with ESLint & format with Prettier. Will fix simple style errors unless being run from the `dev` task.
 * @summary Lint scripts with ESLint.
 * @global
 * @requires gulp-if
 * @requires gulp-eslint
 * @example gulp lint
 */
export function lint() {
	const ifThen = require("gulp-if");
	const eslint = require("gulp-eslint-new");
	return gulp
		.src("**/*.js?(x)", { cwd: "lib" })
		.pipe(eslint({ fix: !watchFlag }))
		.pipe(eslint.result(handleESLintOutput))
		.pipe(ifThen(!watchFlag, gulp.dest("lib")));
}

/**
 * Lint test scripts with ESLint & format with Prettier. Will fix simple style errors unless being run from the `dev` task.
 * @summary Lint tests with ESLint.
 * @global
 * @requires gulp-if
 * @requires gulp-eslint
 * @example gulp lintTests
 */
export function lintTests() {
	const ifThen = require("gulp-if");
	const eslint = require("gulp-eslint-new");
	return gulp
		.src("**/*.js?(x)", { cwd: "tests" })
		.pipe(eslint({ fix: !watchFlag }))
		.pipe(eslint.result(handleESLintOutput))
		.pipe(ifThen(!watchFlag, gulp.dest("tests")));
}

/**
 * Starts a file watcher, linting scripts on save.
 * @global
 * @see {@link lint}
 * @see {@link lintTests}
 * @example gulp dev
 */
export function dev() {
	watchFlag = true;
	gulp.watch(`lib/**/*.js?(x)`, lint);
	gulp.watch(`tests/**/*.js?(x)`, lintTests);
}

export default dev;
