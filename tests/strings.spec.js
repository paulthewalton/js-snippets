import {
	leftPad,
	formatSeconds,
	stripCase,
	sentenceCase,
	titleCase,
	pascalCase,
	snakeCase,
	upperSnakeCase,
	kebabCase,
	camelCase,
} from "../lib/strings";

test("testing leftPad", () => {
	expect(leftPad("hello")).toBe("hello");
	expect(leftPad("hello", 5)).toBe("hello");
	expect(leftPad("hello", 3)).toBe("hello");
	expect(leftPad("hello", 8)).toBe("   hello");
	expect(leftPad(null, 8)).toBe("    null");
	expect(leftPad("hello", 8, false)).toBe("   hello");
	expect(leftPad("hello", 8, "c")).toBe("ccchello");
	expect(leftPad("hello", 8, "ch")).toBe("chchhello");
	expect(leftPad("hello", 8, "0")).toBe("000hello");
	expect(leftPad("hello", 8, 0)).toBe("000hello");
	expect(leftPad("hello", 8, 1)).toBe("111hello");
	expect(leftPad(34, 8)).toBe("      34");
	expect(leftPad(34, 8, 0)).toBe("00000034");
});

test("testing formatSeconds", () => {
	expect(formatSeconds(0)).toBe("0:00");
	expect(formatSeconds(4)).toBe("0:04");
	expect(formatSeconds(4, true)).toBe("0:00:04");
	expect(formatSeconds(77)).toBe("1:17");
	expect(formatSeconds(3030)).toBe("50:30");
	expect(formatSeconds(4000)).toBe("1:06:40");
	expect(formatSeconds(40000)).toBe("11:06:40");
});

test("testing stripCase", () => {
	expect(stripCase("Sample Sentence    to --_be -transformed --- -_-  ")).toBe("sample sentence to be transformed");
	expect(stripCase("Handling sentence case")).toBe("handling sentence case");
	expect(stripCase("Handling Title Case")).toBe("handling title case");
	expect(stripCase("HandlingPascalCase")).toBe("handling pascal case");
	expect(stripCase("handling_snake_case")).toBe("handling snake case");
	expect(stripCase("HANDLING_UPPER_SNAKE_CASE")).toBe("handling upper snake case");
	expect(stripCase("handling-kebab-case")).toBe("handling kebab case");
	expect(stripCase("handlingCamelCase")).toBe("handling camel case");
});

test("testing sentenceCase", () => {
	expect(sentenceCase("Handling sentence case")).toBe("Handling sentence case");
	expect(sentenceCase("Handling Title Case")).toBe("Handling title case");
	expect(sentenceCase("HandlingPascalCase")).toBe("Handling pascal case");
	expect(sentenceCase("handling_snake_case")).toBe("Handling snake case");
	expect(sentenceCase("HANDLING_UPPER_SNAKE_CASE")).toBe("Handling upper snake case");
	expect(sentenceCase("handling-kebab-case")).toBe("Handling kebab case");
	expect(sentenceCase("handlingCamelCase")).toBe("Handling camel case");
});

test("testing titleCase", () => {
	expect(titleCase("Handling sentence case")).toBe("Handling Sentence Case");
	expect(titleCase("Handling Title Case")).toBe("Handling Title Case");
	expect(titleCase("HandlingPascalCase")).toBe("Handling Pascal Case");
	expect(titleCase("handling_snake_case")).toBe("Handling Snake Case");
	expect(titleCase("HANDLING_UPPER_SNAKE_CASE")).toBe("Handling Upper Snake Case");
	expect(titleCase("handling-kebab-case")).toBe("Handling Kebab Case");
	expect(titleCase("handlingCamelCase")).toBe("Handling Camel Case");
});

test("testing pascalCase", () => {
	expect(pascalCase("Handling sentence case")).toBe("HandlingSentenceCase");
	expect(pascalCase("Handling Title Case")).toBe("HandlingTitleCase");
	expect(pascalCase("HandlingPascalCase")).toBe("HandlingPascalCase");
	expect(pascalCase("handling_snake_case")).toBe("HandlingSnakeCase");
	expect(pascalCase("HANDLING_UPPER_SNAKE_CASE")).toBe("HandlingUpperSnakeCase");
	expect(pascalCase("handling-kebab-case")).toBe("HandlingKebabCase");
	expect(pascalCase("handlingCamelCase")).toBe("HandlingCamelCase");
});

test("testing snakeCase", () => {
	expect(snakeCase("Handling sentence case")).toBe("handling_sentence_case");
	expect(snakeCase("Handling Title Case")).toBe("handling_title_case");
	expect(snakeCase("HandlingPascalCase")).toBe("handling_pascal_case");
	expect(snakeCase("handling_snake_case")).toBe("handling_snake_case");
	expect(snakeCase("HANDLING_UPPER_SNAKE_CASE")).toBe("handling_upper_snake_case");
	expect(snakeCase("handling-kebab-case")).toBe("handling_kebab_case");
	expect(snakeCase("handlingCamelCase")).toBe("handling_camel_case");
});

test("testing upperSnakeCase", () => {
	expect(upperSnakeCase("Handling sentence case")).toBe("HANDLING_SENTENCE_CASE");
	expect(upperSnakeCase("Handling Title Case")).toBe("HANDLING_TITLE_CASE");
	expect(upperSnakeCase("HandlingPascalCase")).toBe("HANDLING_PASCAL_CASE");
	expect(upperSnakeCase("handling_snake_case")).toBe("HANDLING_SNAKE_CASE");
	expect(upperSnakeCase("HANDLING_UPPER_SNAKE_CASE")).toBe("HANDLING_UPPER_SNAKE_CASE");
	expect(upperSnakeCase("handling-kebab-case")).toBe("HANDLING_KEBAB_CASE");
	expect(upperSnakeCase("handlingCamelCase")).toBe("HANDLING_CAMEL_CASE");
});

test("testing kebabCase", () => {
	expect(kebabCase("Handling sentence case")).toBe("handling-sentence-case");
	expect(kebabCase("Handling Title Case")).toBe("handling-title-case");
	expect(kebabCase("HandlingPascalCase")).toBe("handling-pascal-case");
	expect(kebabCase("handling_snake_case")).toBe("handling-snake-case");
	expect(kebabCase("HANDLING_UPPER_SNAKE_CASE")).toBe("handling-upper-snake-case");
	expect(kebabCase("handling-kebab-case")).toBe("handling-kebab-case");
	expect(kebabCase("handlingCamelCase")).toBe("handling-camel-case");
});

test("testing camelCase", () => {
	expect(camelCase("Handling sentence case")).toBe("handlingSentenceCase");
	expect(camelCase("Handling Title Case")).toBe("handlingTitleCase");
	expect(camelCase("HandlingPascalCase")).toBe("handlingPascalCase");
	expect(camelCase("handling_snake_case")).toBe("handlingSnakeCase");
	expect(camelCase("HANDLING_UPPER_SNAKE_CASE")).toBe("handlingUpperSnakeCase");
	expect(camelCase("handling-kebab-case")).toBe("handlingKebabCase");
	expect(camelCase("handlingCamelCase")).toBe("handlingCamelCase");
});
