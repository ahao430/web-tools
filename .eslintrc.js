module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["standard"],
  globals: {},
  rules: {
    semi: [2, "always"],
    "arrow-parens": 0,
    "jsx-quotes": [2, "prefer-double"],
    "space-before-function-paren": [2, {anonymous: "always", named: "never"}],
    "spaced-comment": 0,
  },
};
