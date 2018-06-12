const path = require('path');
const base = require('./base.config');

const prod = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'spectres.js',
        library: 'spectres',
        libraryTarget: 'umd'
    },
    plugins: [
        // new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // })
    ],
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
            },
        },
    ],
};

module.exports = Object.assign(base, prod);
