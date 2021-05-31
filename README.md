WEB UI tests with Mocha, WebdriverIO v7 with PageObject

## Features
- WebdriverIO v7
- Page Object model
- Component model example (reusable ui parts within a page)
- Allure Report
- Screenshot capture for failing tests
- ESLint
- Windows OS Support (like: linebreak)

## How to Start

**Download or clone the project**

**Install**

```npm install```

**Run Tests**

```npm test```

**Cross Browser Running**

-Install chromerDriver and Geckodriver locally 

```npm test-firefox``

**Allure Report**
(you must have installed [allure command line](https://docs.qameta.io/allure/#_get_started))

```npm run report```

*run this report command after npm test

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, 
allowing you to run without your tests timing out. 

`DEBUG=true npm test`
### Clean up your test results before execution

`npm run clean`
