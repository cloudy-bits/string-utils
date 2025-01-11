export const helloWorld = (name?: string): string => {
	const trimmedName = name?.trim() ?? "";
	return `Hello, ${trimmedName.length > 0 ? trimmedName : "World"}!`;
};
