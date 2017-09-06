var path = require('path');
module.exports = {
    entry: './editor/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: {
        "ace": true
    }
};