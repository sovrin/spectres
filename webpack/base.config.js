const resolve = (name) => require.resolve(name);

module.exports = {
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}]},
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {test: /\.(png|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=100000'},
        ]
    },
    plugins: [
        resolve('react-hot-loader/babel')
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.less'],
        alias: {
            utils: resolve(__dirname, '../src', 'utils.js'),
            react: resolve(__dirname, '../node_modules', 'react')
        }
    }
};
