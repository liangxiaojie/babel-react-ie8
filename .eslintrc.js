// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    "node": true
  },
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
  }
}
