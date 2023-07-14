const puppeteer = require('puppeteer-core');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('Testarea capturilor de ecran', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // Specify the path to Chrome/Chromium executable
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  jest.setTimeout(10000);
  
  it('Ar trebui să fie conformă cu captura de ecran existentă', async () => {
    await page.goto('http://localhost:3000/register');
    const screenshot = await page.screenshot();

    expect(screenshot).toMatchImageSnapshot();
  });
});
