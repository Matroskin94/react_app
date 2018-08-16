import puppeteer from "puppeteer";

jest.setTimeout(30000);
const APP = 'localhost:8080';
const mockData = {
    location1: 'london',
    location2: 'sdfsf'
}
let page;
let browser;
const width = 1376;
const height = 768;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [
        `--window-size=${width},${height}`
    ]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
  return await page.goto(`${APP}`);
});

afterAll(() => {
  browser.close();
});

describe("Test faves", () => {
  test("Go to faves", async () => {
    await page.waitForSelector("[data-test=searchHeader]");
    await page.click("[data-test=favesLink]");
    await page.waitForSelector("[data-test=favHeader]");
    await page.click("[data-test=favesBackLink]");
  }, 30000);
});