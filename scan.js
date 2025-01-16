const puppeteer = require('puppeteer');
const axeCore = require('axe-core');
const async = require('async');
const fs = require('fs');
require('dotenv').config();

// Set result file
const resultFile = process.env.RESULT_FILE_PATH || './results/result.json';
const urlsFile = process.env.URLS_FILE_PATH || './urls.txt';
const results = {};

let urlsArray = fs.readFileSync(urlsFile).toString().split("\n");


(async () => {
  // Start Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await async.eachSeries(urlsArray, async function (url) {
    console.log("Analizing: " + url);

  
    // Browse the page to analize.
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
    } catch (error) {
      console.log(`Error loading the page ${url}:`, error.message);
    }
  
    // Adds the accessibility audit to the page.
    const axeSource = axeCore.source; // Gets the source code of axe-core.
    await page.evaluate(axeSource);

    // Run the accessibility audit using axe-core.
    let result = await page.evaluate(() => {
        return window.axe.run();
    });

    results[url] = result;

  });

  // Save the results
  fs.writeFileSync(resultFile, JSON.stringify(results, null, 2), 'utf-8');

  console.log(`Results saved in ${resultFile}`);

  // Close the browser
  await browser.close();
})();
