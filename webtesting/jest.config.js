module.exports = {
  preset: "jest-puppeteer",
  globals: {
      localURL: "http://localhost:4502",
	  exampleURL: "https://example.com"
    },
  testMatch: [
      "**/__tests__/**/*test.js?(x)"
    ],
  verbose: true
}