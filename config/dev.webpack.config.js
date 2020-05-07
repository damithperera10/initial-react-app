const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000,
    }
});
