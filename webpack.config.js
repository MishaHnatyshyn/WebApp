var path = require('path');

module.exports = {
    entry: './Content/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['.webpack.js', '.js', '.jsx'],
    },
};