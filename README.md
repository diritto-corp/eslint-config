# @diritto/eslint-config

Installation
> ~~yarn add eslint @diritto/eslint-config --dev~~

or

> ~~npm install eslint @diritto/eslint-config --save-dev~~

현재는 npm 에 업로드 되어있지 않기 때문에 npm 설치 방식으로는 사용하지 않음

> yarn add https://github.com/diritto-corp/eslint-config.git --dev


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

## ESLint extends

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

## Prettier extends
```js
// .prettierrc
"@diritto/eslint-config/prettier-config"
```

## TSConfig extends
### TypeScript
```js
// tsconfig.json
{
  "extends": "@diritto/eslint-config/tsconfig.json",
  "compilerOptions": {    
    ...
  },
}
```

### React with TypeScript
```js
// tsconfig.json
{
  "extends": "@diritto/eslint-config/react/tsconfig.json",
  "compilerOptions": {    
    ...
  },
}
```
