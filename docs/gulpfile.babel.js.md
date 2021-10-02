
## Modules

<dl>
<dt><a href="docs/module_Tasks.md">Tasks</a></dt>
<dd><p>Tasks for Gulp task runner.</p>
</dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="docs/taskDocs.md">taskDocs()</a></dt>
<dd><p>Generate documentation for Gulp tasks.</p>
</dd>
<dt><a href="docs/apiDocs.md">apiDocs()</a></dt>
<dd><p>Generate documentation for project API.</p>
</dd>
<dt><a href="docs/docs.md">docs()</a></dt>
<dd><p>Generate all documentation for this project.</p>
</dd>
<dt><a href="docs/lint.md">lint()</a></dt>
<dd><p>Lint scripts with ESLint.</p>
</dd>
<dt><a href="docs/lintTests.md">lintTests()</a></dt>
<dd><p>Lint tests with ESLint.</p>
</dd>
<dt><a href="docs/dev.md">dev()</a></dt>
<dd><p>Starts a file watcher, linting scripts on save.</p>
</dd>
</dl>


<br><a name="module_Tasks"></a>

## Tasks
Tasks for Gulp task runner.

**Requires**: <code>module:gulp</code>, <code>module:fancy-log</code>, <code>module:chalk</code>  
**Author**: Paul Walton  

<br><a name="taskDocs"></a>

## taskDocs()
Generate documentation for Gulp tasks.

**Requires**: <code>module:jsdoc-to-markdown</code>, <code>module:dmd-readable</code>  
**Example**  
```sh
gulp taskDocs
```

<br><a name="apiDocs"></a>

## apiDocs()
Generate documentation for project API.

**Requires**: <code>module:jsdoc-to-markdown</code>, <code>module:dmd-readable</code>  
**Example**  
```sh
gulp apiDocs
```

<br><a name="docs"></a>

## docs()
Generate all documentation for this project.

**See**

- [taskDocs](#taskDocs)
- [apiDocs](#apiDocs)

**Example**  
```sh
gulp docs
```

<br><a name="lint"></a>

## lint()
> Lint scripts with ESLint.

Lint scripts with ESLint & format with Prettier. Will fix simple style errors unless being run from the `dev` task.

**Requires**: <code>module:gulp-if</code>, <code>module:gulp-eslint</code>  
**Example**  
```sh
gulp lint
```

<br><a name="lintTests"></a>

## lintTests()
> Lint tests with ESLint.

Lint test scripts with ESLint & format with Prettier. Will fix simple style errors unless being run from the `dev` task.

**Requires**: <code>module:gulp-if</code>, <code>module:gulp-eslint</code>  
**Example**  
```sh
gulp lintTests
```

<br><a name="dev"></a>

## dev()
Starts a file watcher, linting scripts on save.

**See**

- [lint](#lint)
- [lintTests](#lintTests)

**Example**  
```sh
gulp dev
```
