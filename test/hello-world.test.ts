import { describe, expect, it } from "@jest/globals";
import { helloWorld } from "../src/hello-world";

describe("helloWorld test suite", () => {
	it("With name", () => {
		expect(helloWorld("Michael")).toBe("Hello, Michael!");
	});

	it("Without name", () => {
		expect(helloWorld()).toBe("Hello, World!");
	});

	it("With only whitespace in name", () => {
		expect(helloWorld("\t  \n")).toBe("Hello, World!");
	});

	it("Empty string for name", () => {
		expect(helloWorld("")).toBe("Hello, World!");
	});
});
