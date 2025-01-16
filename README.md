# Web Accessibility Scanner

## Description
This project is a web accessibility scanner that uses Puppeteer and axe-core to analyze web pages for accessibility issues. The URLs to be analyzed are read from a file, and the results are saved in a JSON file.

## Requirements
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository:
    ```sh
    git clone git@github.com:pepercussi/accessibility-scan.git
    cd accessibility-scan
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file based on the [.env.example](http://_vscodecontentref_/1) file:
    ```sh
    cp .env.example .env
    ```

4. Update the [.env](http://_vscodecontentref_/2) file with the desired paths for the result file and URLs file.

## Usage
1. Add the URLs you want to analyze in the [urls.txt](http://_vscodecontentref_/3) file, one URL per line.

2. Run the scanner:
    ```sh
    node scan.js
    ```

3. The results will be saved in the file specified in the [.env](http://_vscodecontentref_/4) file (default is `./results/my_result.json`).

## Example
Here is an example of the [.env](http://_vscodecontentref_/5) file:
    ```env
    RESULT_FILE_PATH=./results/my_result.json
    URLS_FILE_PATH=./my_urls.txt
    ```

The urls.txt file should contain the URLs to be analyzed, for example:
    ```
    https://www.example.com
    http://other.example.com
    ```

After running the scanner, the results will be saved in the specified result file in JSON format.