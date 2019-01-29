const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssAutoreset = require('postcss-autoreset');
const postcssInitial = require('postcss-initial');
const postcssFontMagician = require('postcss-font-magician');

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
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                        options: {
                            insertAt: 'top',
                            singleton: true,
                        },
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            url: false,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                // Support for basic SASS syntax
                                precss,
                                postcssFlexbugsFixes,
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                                postcssAutoreset({
                                    rulesMatcher: 'bem',
                                }),
                                postcssInitial,
                                postcssFontMagician({
                                    variants: {
                                        Poppins: {
                                            '700': [],
                                        },
                                        Lato: {
                                            '400': [],
                                            '700': [],
                                        },
                                    },
                                    foundries: ['google'],
                                }),
                            ],
                        },
                    },
                ],
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
