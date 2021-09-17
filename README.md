# @diritto/eslint-config

## Installation
> yarn add eslint @diritto/eslint-config --dev

or

> npm install eslint @diritto/eslint-config --save-dev

## Recommends

### Frontend
```js
  ...
  extends: [
    "@diritto/eslint-config",
    "@diritto/eslint-config/react/typescript",
    "@diritto/eslint-config/prettier"
  ]
  ...
```

### Backend
```js
  ...
  extends: [
    "@diritto/eslint-config",
    "@diritto/eslint-config/typescript",
    "@diritto/eslint-config/prettier"
  ]
  ...
```

## Modules

### JavaScript
```js
  ...
  extends: [
    "@diritto/eslint-config"
  ],
  ...
```

### TypeScript
```js
  ...
  extends: [
    "@diritto/eslint-config",
    "@diritto/eslint-config/typescript"
  ],
  ...
```

### React
```js
  ...
  extends: [
    "@diritto/eslint-config",
    "@diritto/eslint-config/react"
  ],
  ...
```

### React with TypeScript
```js
  ...
  extends: [
    "@diritto/eslint-config",
    "@diritto/eslint-config/react/typescript"
  ],
  ...
```

### Prettier
```js
  ...
  extends: [
    "@diritto/eslint-config",
    "@diritto/eslint-config/prettier"
  ]
  ...
```
