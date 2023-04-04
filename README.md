# RIA1 - Whatheure
### Thomas Grossmann & Benoît Pierrehumbert

## Projet
Whatheure est un site permettant de voir l'heure actuelle de n'importe quel lieu dans le monde.

## Dépendences
- Git 2.37.1
- NodeJS v19.5.0
- NPM @9.3.1
  - selenium-webdriver : ^4.8.1
  - jest : ^29.5.0
  - supertest : ^6.3.3

## Installation
Pour installer Whateur, clonez le repo et installez les dépendences NPM
```bash
git clone https://github.com/CPNV-RIA1/whatheure
cd whatheure
npm install
```

## Lancer l'application
```bash
node server.js
```

## Lancer les tests en local
```bash
npm run test tests/git.test.js
```

## Structure du code
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
├── server.js
├── storage
│   ├── backend.json
│   └── backend.json.example
└── tests
    ├── git.test.js
    ├── index.js
    └── whatheur.side
```
