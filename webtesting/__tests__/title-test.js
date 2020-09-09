describe('Example Domain', () => {
	
  beforeAll(async () => {
    await page.goto(exampleURL, {waitUntil: 'domcontentloaded'});
  });

  it('should be titled "Example domain"', async () => {
	        const title = await page.title();
           expect(title).toBe('Example Domain');
  });
 
});