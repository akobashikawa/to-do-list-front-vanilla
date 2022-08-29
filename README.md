# To Do List - Frontend - Vanilla

## Configuration

- ES modules for base code
- CommonJS modules for jest 

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

### Parcel

- $ npm install --save-dev Parcel

- index.html
```html
<script src="src/index.js" type="module"></script>
```

- $ npx parcel index.html