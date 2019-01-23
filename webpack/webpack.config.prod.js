const path = require('path');
const paths = require('./paths');

module.exports = {
    mode: 'production',
    entry: {
        package: [require.resolve(path.join(paths.source, 'index.js'))],
    },
    output: {
        filename: 'index.js',
        path: paths.output,
        publicPath: paths.static,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        modules: [paths.source, paths.nodeModules],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(eot|svg|png|ttf|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
};
