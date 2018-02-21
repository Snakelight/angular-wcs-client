const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];
const optionsGen = require('./options');
module.exports = (env) => {

    const options = optionsGen(env);
    let config = {}
    config.devServer = { historyApiFallback: true };

    config.stats = {
        children: false,
        modules: false
    };

    config.plugins = [
        new SourceMapDevToolPlugin({
            filename: "[file].map[query]",
            moduleFilenameTemplate: "[resource-path]",
            fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
            sourceRoot: "webpack:///",
            exclude: ['vendor']
        })
    ];

    if (options.isDev) {
        config.output = { publicPath: '' };
        config.plugins.push(
            new HtmlWebpackPlugin({
                "template": "./src\\index.html",
                "filename": "./index.html",
                "hash": false,
                "inject": true,
                "compile": true,
                "favicon": false,
                "minify": false,
                "cache": true,
                "showErrors": true,
                "chunks": "all",
                "excludeChunks": [],
                "title": "Webpack App",
                "xhtml": true,
                "chunksSortMode": function sort(left, right) {
                    let leftIndex = entryPoints.indexOf(left.names[0]);
                    let rightindex = entryPoints.indexOf(right.names[0]);
                    if (leftIndex > rightindex) {
                        return 1;
                    }
                    else if (leftIndex < rightindex) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            })
        );

        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
        //config.plugins.push(new BundleAnalyzerPlugin())//

    }

    const commonConfig = require('./webpack.common')
    config = merge(commonConfig(env), config);

    return config;
}
