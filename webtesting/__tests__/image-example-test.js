const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

describe('A Snapshot test', () => {
	let page
	beforeAll(async () => {
	    page = await global.__BROWSER__.newPage()
		await page.setViewport({
			width: 0,
			height: 0,
			//isMobile: true,
		})
	})

	afterAll(async () => {
		await page.close()
	})
	const options = {"customSnapshotsDir" : "./mysnaps"}
	test('homepage snapshot', async () => {
		await page.goto('https://example.com')
		const image = await page.screenshot()
		expect(image).toMatchImageSnapshot(options)
	})
})
