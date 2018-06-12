const path = require('path');
const base = require('./base.config.js');

const dev = {
    entry: path.join(__dirname, '../src/index.js'),
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devtool: '#eval-source-map'
};

module.exports = Object.assign(base, dev);
