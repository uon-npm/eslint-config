[![NPM](https://nodeico.herokuapp.com/@universityofnottingham/eslint-config.svg)](https://npmjs.com/package/@universityofnottingham/eslint-config)

## University of Nottingham standard `eslint` configuration

> to prevent the same `.eslintrc` being present on every project with any javascript in.

## Usage

In an `npm` enabled project:

1. Have `eslint` and `babel-eslint`
    - `npm i -D eslint babel-eslint`
1. Install this package
    - `npm i @universityofnottingham/eslint-config`
1. Add `eslintConfig` to `package.json` extending this config:

```js
{
  //...
  "eslintConfig": {
    "extends": "@universityofnottingham",
    // optional rule overrides
  }
  //...
}
```

Enjoy your lightweight, UoN standard `eslint` without a separate config file!