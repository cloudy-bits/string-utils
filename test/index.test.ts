import { describe, expect, it } from "@jest/globals";
import { isBlank } from "../src";

describe("isBlank test suite", () => {
	it("undefined", () => {
		expect(isBlank()).toBe(true);
	});

	it("null", () => {
		expect(isBlank(null)).toBe(true);
	});

	it("empty", () => {
		expect(isBlank("")).toBe(true);
	});

	it("all whitespace", () => {
		expect(isBlank(" \t\n\r ")).toBe(true);
	});

	it("no whitespace", () => {
		expect(isBlank("blah")).toBe(false);
	});

	it("alphanumeric characters with whitespace", () => {
		expect(isBlank(" \t\n\r blah")).toBe(false);
	});
});
