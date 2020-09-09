const { toMatchImageSnapshot } = require('jest-image-snapshot')

expect.extend({ toMatchImageSnapshot })

describe('A Snapshot test', () => {
	let localPage
	beforeAll(async () => {
	    localPage = await browser.newPage()
		await localPage.setViewport({
			width: 0,
			height: 0,
			//isMobile: true,
		})
	})

	afterAll(async () => {
		await localPage.close()
	})
	const options = {"customSnapshotsDir" : "./mysnaps"}
	test('homepage snapshot', async () => {
		await localPage.goto(exampleURL)
		const image = await localPage.screenshot()
		expect(image).toMatchImageSnapshot(options)
	})
})
