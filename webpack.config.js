const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    app: `${__dirname}/app/main.js`
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  }
}
