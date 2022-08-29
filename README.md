# To Do List - Frontend - Vanilla

## Configuration

- ES modules for base code
- ES modules for jest 

### Jest

- $ npm install --save-dev jest

- package.json
```json
  "scripts": {
    "test": "jest"
  },
```

- jest.config.js
```js
module.exports = { 
    "collectCoverage": true,
    "coverageReporters": ["html"]
};
```

- $ npm run test
