// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
  }
}
