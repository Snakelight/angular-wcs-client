const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const getUglifyOptions = () => {
    const uglifyCompressOptions = {
        pure_getters: true,
        passes: 3
    };

    return {
        ecma: 5,
        warnings: false,
        ie8: false,
        mangle: true,
        compress: uglifyCompressOptions,
        output: {
            ascii_only: true,
            comments: false
        }
    };
}

module.exports = (env) => {
    let config = {}

    config.plugins = [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: getUglifyOptions()
        }),
        new BundleAnalyzerPlugin()
    ]

    const commonConfig = require('./webpack.common')
    config = merge(commonConfig(env), config);

    return config;
}