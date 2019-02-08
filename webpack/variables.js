const dev = {
    SERVER_URL: JSON.stringify('https://apist.getgrover.com/api/v1'),
    'process.env.NODE_ENV': JSON.stringify('development'),
};

const production = {
    SERVER_URL: JSON.stringify('https://api.getgrover.com/api/v1'),
    'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
    dev,
    production,
};
