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

3. Create a `.env` file based on the [.env.example](https://github.com/pepercussi/accessibility-scan/blob/main/.env.example) file:
    ```sh
    cp .env.example .env
    ```

4. Update the `.env` file with the desired paths for the result file and URLs file.

## Usage
1. Add the URLs you want to analyze in the [urls.txt](https://github.com/pepercussi/accessibility-scan/blob/main/urls.txt) file, one URL per line.

2. Run the scanner:
    ```sh
    node scan.js
    ```

3. The results will be saved in the file specified in the `.env` file (If nothig is specified, the default is `./results/result.json`).

## Example
Here is an example of the `.env` file:
    ```env
    RESULT_FILE_PATH=./results/my_result.json
    URLS_FILE_PATH=./urls.txt
    ```

The urls.txt file should contain the URLs to be analyzed, for example:
    ```
    https://www.example.com
    http://other.example.com
    ```

After running the scanner, the results will be saved in the specified result file in JSON format.