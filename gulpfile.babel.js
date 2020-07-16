/**
 * Tasks for Gulp task runner.
 * @module Tasks
 * @requires gulp
 * @requires fancy-log
 * @requires chalk
 * @author Paul Walton
 * @since 1.0.0
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
	partial: "docs/partials/global-index-dl.hbs",
	"no-cache": true,
};

/**
 * Generate documentation for Gulp tasks.
 * @example gulp taskDocs
 * @requires jsdoc-to-markdown
 * @requires dmd-readable
 * @global
 */
export function taskDocs(done) {
	const jsdoc2md = require("jsdoc-to-markdown");
	jsdoc2md
		.render({ files: __filename, "example-lang": "sh", ...jsdoc2mdOpts })
		.then((output) => fs.writeFileSync(`docs/${path.basename(__filename)}.md`, output), done());
}

/**
 * Generate documentation for project API.
 * @example gulp apiDocs
 * @requires jsdoc-to-markdown
 * @requires dmd-readable
 * @global
 */
export function apiDocs() {
	const glob = require("glob");
	const jsdoc2md = require("jsdoc-to-markdown");
	return new Promise((resolve, reject) => {
		glob("src/**/*!(spec|test|index).[tj]s?(x)", async (err, matches) => {
			if (err) {
				reject(err);
			}
			Promise.all(
				matches.map(async (match) => {
					const outPath = `docs/${path.basename(match)}.md`;
					const data = await jsdoc2md.render({ files: match, ...jsdoc2mdOpts });
					return fs.promises.writeFile(outPath, data);
				})
			)
				.then(resolve)
				.catch(reject);
		});
	});
}

/**
 * Generate all documentation for this project.
 * @function
 * @example gulp docs
 * @see {@link taskDocs}
 * @see {@link apiDocs}
 * @global
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
 * @example gulp lint
 * @requires gulp-if
 * @requires gulp-eslint
 * @global
 */
export function lint() {
	const ifThen = require("gulp-if");
	const eslint = require("gulp-eslint");
	return gulp
		.src("**/*.js?(x)", { cwd: "src" })
		.pipe(eslint({ fix: !watchFlag }))
		.pipe(eslint.result(handleESLintOutput))
		.pipe(ifThen(!watchFlag, gulp.dest("src")));
}

/**
 * Lint test scripts with ESLint & format with Prettier. Will fix simple style errors unless being run from the `dev` task.
 * @summary Lint tests with ESLint.
 * @example gulp lintTests
 * @requires gulp-if
 * @requires gulp-eslint
 * @global
 */
export function lintTests() {
	const ifThen = require("gulp-if");
	const eslint = require("gulp-eslint");
	return gulp
		.src("**/*.js?(x)", { cwd: "tests" })
		.pipe(eslint({ fix: !watchFlag }))
		.pipe(eslint.result(handleESLintOutput))
		.pipe(ifThen(!watchFlag, gulp.dest("src")));
}

/**
 * Starts a file watcher, linting scripts on save.
 * @example gulp dev
 * @see {@link lint}
 * @see {@link lintTests}
 * @global
 */
export function dev() {
	watchFlag = true;
	gulp.watch(`src/**/*.js?(x)`, lint);
	gulp.watch(`tests/**/*.js?(x)`, lintTests);
}

export default dev;
