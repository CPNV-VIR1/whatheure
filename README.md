# RIA1 - Whatheure
### Thomas Grossmann & Benoît Pierrehumbert

## Project
Whatheure is an application that displays the current time of any place in the world.

## Dependencies
- Git 2.37.1
- NodeJS v19.5.0
- NPM @9.3.1
  - selenium-webdriver : ^4.8.1
  - jest : ^29.5.0
  - supertest : ^6.3.3

## Installation
To install Whateure, clone the repo and install the NPM dependencies
```bash
git clone https://github.com/CPNV-RIA1/whatheure
cd whatheure
npm install
```

## Run the application
```bash
node serverExpress.js
```

## Run the tests locally
```bash
npm run test tests/git.test.js
```

## Structure
```bash
├── LICENSE
├── assets
│   ├── js
│       ├── defaulttime.js
│       ├── lang.js
│       └── whatheure.js
│   ├── json
│   └── loading.gif
├── index.html
├── keys.json
├── node_modules
├── package-lock.json
├── package.json
├── serverExpress.js
├── storage
│   ├── backend.json
│   └── backend.json.example
└── tests
    ├── git.test.js
    ├── index.js
    └── whatheur.side
```
