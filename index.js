module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "camelcase": 2,
    "no-unused-vars": 1,
    "prefer-const": 2,
    "no-const-assign": 2,
    "no-var": 2,
    "no-undef": 2,
    "one-var": [
      2,
      "never"
    ],
    "no-new-object": 2,
    "no-new-func": 2,
    "no-array-constructor": 2,
    "prefer-destructuring": 2,
    "prefer-template": 2,
    "no-eval": 2,
    "prefer-rest-params": 2,
    "prefer-arrow-callback": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "dot-notation": 2,
    "eqeqeq": [
      2,
      "always",
      {
        "null": "ignore"
      }
    ]
  }
}