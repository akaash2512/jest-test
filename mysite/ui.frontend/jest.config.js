module.exports = {
	preset: "jest-puppeteer",
	globals: {
		localURL: "http://localhost:4502",
		exampleURL: "https://example.com"
	},
	testMatch: [
		"**/__tests__/**/*akash.js?(x)"
	],
	verbose: true
}