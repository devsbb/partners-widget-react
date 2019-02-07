const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssAutoreset = require('postcss-autoreset');
const postcssInitial = require('postcss-initial');
const postcssFontMagician = require('postcss-font-magician');
const webpack = require('webpack');

const paths = require('./paths');
const variables = require('./variables');

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
                            sourceMap: true,
                        },
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            plugins: () => [
                                // Support for basic SASS syntax
                                precss,
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
                                    protocol: 'https:',
                                }),
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
                                    /*
                                        reset only simple class selectors
                                        [see: https://github.com/maximkoretskiy/postcss-autoreset/issues/28]
                                    */
                                    rulesMatcher: rule =>
                                        rule.selector.match(
                                            // matches 'bem' notation, like .block-name__element-name--modifier-name
                                            /^[.](\w|[-])+(__(\w|[-])+)*$/
                                        ),
                                }),
                                postcssInitial,
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
    plugins: [new webpack.DefinePlugin(variables.production)],
};
