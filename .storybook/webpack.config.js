// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

module.exports = {
    resolve: {
        alias: {
            utils: require('path').resolve(__dirname, '../src', 'utils.js'),
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}]
            }
        ],
    },
};
