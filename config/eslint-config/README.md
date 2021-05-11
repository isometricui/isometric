# Isometric - ESLint Config

## Installation
```
npm install @isometric/eslint-config --save-dev
```
or
```
pnpm add @isometric/eslint-config --save-dev
```

## Usage
Create a `.eslintrc` or `.eslintrc.js` file in your package root directory and extend the configuration.

```
module.exports = {
  extends: '@isometric/eslint-config/react',
  parserOptions: { tsconfigRootDir: __dirname },
};

```
or for node targets:
```
module.exports = {
  extends: '@isometric/eslint-config/node',
  parserOptions: { tsconfigRootDir: __dirname },
};

```

## License

Isometric UI components and utilities are licensed under MIT License.

---

© 2021 - Isometric (Ömer Balyali <omerbalyali@gmail.com>)