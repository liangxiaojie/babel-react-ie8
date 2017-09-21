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
    'react/jsx-filename-extension': 0
  }
}
