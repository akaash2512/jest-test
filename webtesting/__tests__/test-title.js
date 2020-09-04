describe('Example Domain', () => {
	    let page
  beforeAll(async () => {
	      page = await global.__BROWSER__.newPage()
    await page.goto('https://example.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Example Domain');
  });
  
  afterAll(async () => {
      await page.close()
    })
});