module.exports = {
    entry: './editor/index.js',
    devtool: 'source-map',
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
    },
    node: {
        fs: 'empty'
    }
};