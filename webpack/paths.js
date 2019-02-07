const path = require('path');

module.exports = {
    source: path.resolve(__dirname, '../src'),
    static: path.resolve(__dirname, '../static'),
    output: path.resolve(__dirname, '../build'),
    nodeModules: path.resolve(__dirname, '../node_modules'),
};
